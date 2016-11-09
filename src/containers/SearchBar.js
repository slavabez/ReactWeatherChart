import React, { Component } from 'react';
import { WEATHER_API_KEY } from '../helpers/Variables';

export default class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();
        let searchTerm = this.state.term;
        console.log(WEATHER_API_KEY);
    }

    render() {
        return (
            <form
                className="input-group"
                onSubmit={this.onFormSubmit}
            >
                <input
                    className="form-control"
                    value={this.state.term}
                    placeholder="Get a five day forecast in your favourite cities"
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}