import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultCard from './ResultCard';

import { fetchData } from '../actions/actionCreators';
import { SEARCH } from '../actions/constants';

class SearchBar extends Component {

  onFocusInOut(event) {
     var e = document.getElementById('search');
     if(e.style.display === 'block')
        e.style.display = 'none';
     else
        e.style.display = 'block';
  }

  onChange(e) {
    var user = e.target.value;
    var url = 'https://api.instagram.com/v1/users/search?scope=public_content&q='+ user +'&access_token=' + this.props.token;

    this.props.fetchData(url, SEARCH);
  }

  render () {
    console.log(this.props.search);
    return (
      <div>
        <input
          onFocus={this.onFocusInOut.bind(this)}
          onBlur={this.onFocusInOut.bind(this)}
          className="search-input"
          placeholder="Buscar"
          type="text"
          onChange={this.onChange.bind(this)}/>

        <div id="search" style={{display: 'none'}}>
           { 'Espere tantico mientras buscamos' || this.props.search.map((item) => <ResultCard key={item.id} data={item}/>) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ search, fetching, token }) => {
  return {
    search,
    fetching,
    token
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url, type, append = false) => dispatch(fetchData(url, type, append))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
