import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  const { match, location } = this.props;
  
    return (
      <main>
        <p>Este es mi codigo para hacer peticiones: { new URLSearchParams(location.search).get('code') }</p>
      </main>
    );
  }
}
