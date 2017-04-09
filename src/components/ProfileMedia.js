import React, { Component } from 'react'

class ProfileMedia extends Component {
  render () {
    return (
      <div>
        <img alt="" src={this.props.data.images.thumbnail.url}></img>
      </div>
    );
  }
}

export default ProfileMedia;
