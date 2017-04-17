import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTokenAccess } from '../actions/actionCreators';

class Home extends Component {

  componentDidMount() {
    var { location } = this.props;
    var token = location.hash.split('#access_token=')[1];
    //let code = new URLSearchParams(location.search).get('code'); //for code, no token;

    if(token && !this.props.token)
      this.props.setToken(token);
  }

  render () {
    return (
      <main>
        <p> Estamos en el main y aquí no pasa mucho</p>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => {
      dispatch(setTokenAccess(token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
