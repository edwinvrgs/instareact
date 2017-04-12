import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ResultCard extends Component {
  render () {
    return (
      <div>
        <NavLink to={'/profile/' + this.props.data.id}>
          <img alt="" src={this.props.data.profile_picture}></img>
          <p>{this.props.data.username}</p>
          <p><span><strong>{this.props.data.full_name}</strong></span></p>
        </NavLink>
      </div>
    );
  }
}

export default ResultCard;
