import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultCard from './ResultCard';

import { fetchData } from '../actions/actionCreators';
import { SEARCH } from '../actions/constants';

class SearchBar extends Component {

  showComponent(id, show) {
     var e = document.getElementById(id);
     if(!show)
        e.style.display = 'none';
     else
        e.style.display = 'block';
  }

  onChange(e) {
    this.showComponent('search', true);

    var user = e.target.value;
    var url = 'https://api.instagram.com/v1/users/search?scope=public_content&q='+ user +'&access_token=' + this.props.token;

    this.props.fetchData(url, SEARCH);
  }

  renderResults() {
    if(this.props.fetching || !this.props.search.data)
      return <div id="search" style={{display: 'none'}}> Esperate mi pana... </div>;

    return (
      <div onBlur={() => this.showComponent('search', false)} id="search" style={{display: 'none'}}>
         { this.props.search.data.map((item) => <ResultCard key={item.id} data={item}/>) }
      </div>
    );
  }

  render () {
    return (
      <div>
        <input
          className="search-input"
          placeholder="Buscar"
          type="text"
          onChange={this.onChange.bind(this)}
          />
        { this.renderResults() }
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
