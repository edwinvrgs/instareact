import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { PROFILE, MEDIA } from '../actions/constants';

class ResultCard extends Component {

  onClickCard() {
    var url = 'https://api.instagram.com/v1/users/'+ this.props.data.id +'/?access_token=' + this.props.token;
    this.props.fetchData(url, PROFILE);

    url = 'https://api.instagram.com/v1/users/'+ this.props.data.id +'/media/recent/?access_token=' + this.props.token;
    this.props.fetchData(url, MEDIA);

    <Redirect to={'/profile/' + this.props.id}/>
  }

  render () {
    return (
      <div onClick={this.onClickCard.bind(this)}>
        <img alt="" src={this.props.data.profile_picture}></img>
        <p>{this.props.data.username}</p>
        <p><span><strong>{this.props.data.full_name}</strong></span></p>
      </div>
    );
  }
}

export default ResultCard;
