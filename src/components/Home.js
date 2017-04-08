import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTokenAccess } from '../actions/actionCreators';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { location } = this.props;
    let token = new URLSearchParams(location.search).get('code');

    if(token)
      this.props.setToken(token);
  }

  render () {
    let { location, token } = this.props;

    return (
      <main>
        <p>Este es mi codigo para hacer peticiones: </p>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => {
      dispatch(setTokenAccess(token));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
