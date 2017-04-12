import React, { Component } from 'react'

const ProfileHeader = (props) => (
  <div>
    <p>{props.data.username}</p>
    <p>{props.data.counts.media} publicaciones</p>
    <p>{props.data.counts.followed_by} seguidores</p>
    <p>{props.data.counts.follows} seguidos</p>
    <p><span><strong>{props.data.full_name}</strong></span> {props.data.bio}</p>
    <a>{props.data.website}</a>
  </div>
);

export default ProfileHeader;
