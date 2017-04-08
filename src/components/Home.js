import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  console.log(this.props.location.hash.replace('#access_token=', ''));
    return (
      <main> Estamos en el component. Esto está vacío :(. Hola: {this.props.match.params.code} </main>
    );
  }
}
