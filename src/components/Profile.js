import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateProfile, appendPosts } from '../actions/actionCreators';

import ProfileHeader from './ProfileHeader';
import ProfileMedia from './ProfileMedia';

class Profile extends Component {

  componentDidMount() {
    this.getProfile();
  }

  async getProfile() {
    let data = await fetch('https://api.instagram.com/v1/users/self/?access_token='+this.props.token, {method: 'get', mode: 'cors'})
      .then(response => response.json()).then(responseJSON => responseJSON);

    console.log(data);
  }

  render () {
    return (
      <main>
        <ProfileHeader />
        <ProfileMedia />
      </main>
    );
  }
}

const mapStateToProps = ({ token, profile }) => {
  return {
    token,
    profile
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (data) => {
      dispatch(updateProfile(data));
    },
    appendPosts: (posts) => {
      dispatch(appendPosts(posts));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
