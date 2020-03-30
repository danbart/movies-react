import React, { Component } from 'react';
import PropTypes from 'prop-types'


import {Title} from '../components/Title'
import { SearchForms } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component {
    state = { usedSearch:false, results: []}

    _handleResults = (results) => {
        this.setState({results, usedSearch:true})
      }
    
      _renderResults() {
        return this.state.results.length === 0 
          ? <p>Sorry! Results not Found!</p>
        : <MoviesList movies={this.state.results} /> 
      }
    render(){
        return(
            <div >
                <Title>Seacrh Movies</Title>
                <div className="SearchForm-wrapper">
                <SearchForms onResults={this._handleResults} />
                </div>
                {this.state.usedSearch
                ? this._renderResults()
                : <small>Use the Form to search a movie</small> }      
            </div>
        )
    }
}