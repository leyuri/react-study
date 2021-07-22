import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: this.props.term
        }
    }
    change(term) {
        this.setState({ term });
        // setState 때문에 value가 바뀌고 다시 화면 update가 일어남 
    }
    render() {
        console.log("props", this.state.term)
        return (
            <div className="pr-3 pl-1">
                <form className="d-flex">
                    <input
                        className="form-control me-2 shadow-none"
                        type="search"
                        placeholder="Search"
                        value={this.state.term}
                        onChange={(e) => {
                            this.change(e.target.value);
                        }}
                    />
                    <button className="btn btn-outline-success" type="button" onClick={() => {
                        this.props.onChange(this.state.term);
                    }}>Search</button>
                </form>
            </div>

        )
    }
}
