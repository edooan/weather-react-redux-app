import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        const self = this;

        self.state = { term: '' }
        self.onInputChange = self.onInputChange.bind(self);
        self.onFormSubmit = self.onFormSubmit.bind(self)
    }

    onInputChange(e) {
        this.setState({
            term: e.target.value
        })
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} action="" className='input-group'>
                <input
                    value={this.state.term}
                    className='form-control'
                    placeholder='Get a five-day forecast in your favorites cities'
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);