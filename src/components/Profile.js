import React, { Component } from 'react';

import ProfileHeader from './ProfileHeader';
import ProfileMedia from './ProfileMedia';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

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
