import React, { Component } from 'react';
import { NavLink } from 'react-redux';

class ResultCard extends Component {
  render () {
    return (
      <div>
        <a href={'/profile/' + this.props.data.id}>
          <img alt="" src={this.props.data.profile_picture}></img>
          <p>{this.props.data.username}</p>
          <p><span><strong>{this.props.data.full_name}</strong></span></p>
        </a>
      </div>
    );
  }
}

export default ResultCard;
