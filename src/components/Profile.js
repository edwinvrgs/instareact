import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions/actionCreators';
import { PROFILE, MEDIA } from '../actions/constants';

import ProfileHeader from './ProfileHeader';
import ProfileMedia from './ProfileMedia';

class Profile extends Component {

  componentDidMount() {
    this.getData();
  }

/*
  shouldComponentUpdate(nextProps) {
    console.log(nextProps.match.url !== this.props.match.url || !this.props.match.params.id);
    return nextProps.match.url !== this.props.match.url || !this.props.match.params.id;
  }
*/

  getData() {
    var id = 'self';

    if(this.props.match.id)
      id = this.props.match.id;

    this.getProfile(id);
    this.getMedia(id);
  }

  getProfile(id = 'self') {
    if(!this.props.token)
      return;

    var url = 'https://api.instagram.com/v1/users/'+ id +'/?access_token=' + this.props.token;

    this.props.fetchData(url, PROFILE);
  }

  getMedia(id = 'self') {
    if(!this.props.token)
      return;

    var url = 'https://api.instagram.com/v1/users/'+ id +'/media/recent/?access_token=' + this.props.token;

    this.props.fetchData(url, MEDIA);
  }

  render () {
    if(!this.props.posts)
      return <p> Esperate mi pana... </p>;

    return (
      <main>
        <ProfileHeader data={this.props.profile.data}/>
        {
          this.props.posts.data.map(
            (item) => <ProfileMedia key={item.id} data={item}/>
          )
        }
      </main>
    );
  }
}

const mapStateToProps = ({ token, profile, posts, fetching }) => {
  return {
    token,
    profile,
    posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url, type, append = false) => dispatch(fetchData(url, type, append))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
