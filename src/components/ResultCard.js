import React, { Component } from 'react'

class ResultCard extends Component {
  render () {
    return (
      <div>
        { console.log(this.props.data) }
      </div>
    );
  }
}

export default ResultCard;
