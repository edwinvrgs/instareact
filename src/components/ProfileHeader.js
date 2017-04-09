import React, { Component } from 'react'

class ProfileHeader extends Component {
  render () {
    return (
      <div>
        <p>{this.props.data.username}</p>
        <p>{this.props.data.counts.media} publicaciones</p>
        <p>{this.props.data.counts.followed_by} seguidores</p>
        <p>{this.props.data.counts.follows} seguidos</p>
        <p><span><strong>{this.props.data.full_name}</strong></span> {this.props.data.bio}</p>
        <a>{this.props.data.website}</a>
      </div>
    );
  }
}

export default ProfileHeader;
