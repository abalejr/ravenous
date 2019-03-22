import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { businesses: [] };

        this.searchYelp = this.searchYelp.bind(this);
    }
    
    searchYelp(term, location, sortBy) {
        console.log('Search for: ' + term + ' in ' + location + ' and sort by: ' + sortBy);
    }

    render() {
        return (
            <div className="App">
                <h1>ravenous</h1>
                <SearchBar searchYelp={this.searchYelp} />
                <BusinessList businesses={businesses} /> 
            </div>
        );
    }
}

export default App;
