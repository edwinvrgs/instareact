import React, { Component } from 'react'

const ProfileMedia = (props) => (
  <div>
    <img alt="" src={props.data.images.thumbnail.url}></img>
  </div>
);

export default ProfileMedia;
