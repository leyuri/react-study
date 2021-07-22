import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props); this.state = {
            term: this.props.term
        }
    }

    render() {
        console.log("props", this.state.term)
        return (
            <div className="pr-3 pl-1">
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        value={this.state.term}
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

        )
    }
}

export default SearchBar;
