import React, {Component} from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <hr />
                </div>
                <SearchBar/>
                <WeatherList/>
            </div>
        );
    }
}
