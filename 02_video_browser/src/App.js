import React from 'react'
import './App.css';
import * as search from 'youtube-search';

import SearchBar from './components/search_bar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: [],
      selectedVideo: null
    };
    var opts = {
      maxResults: 20,
      key: 'AIzaSyC8ew0DgXP36CquBiAw75B7hWRsfvRxhDs'
    };

    search('떡볶이', opts, (err, results) => {
      if (err) return console.log(err);
      this.setState({
        video: results,
        selectedVideo: results[0]
      })
      console.dir(results);
    });
  }

  render() {
    return (
      <div className="App container mt-3" >
        <SearchBar />
        <div className="row">
          <div className="col-8">
          </div>
          <div className="col-4">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
