import React from 'react'
import './App.css';
import * as youtubeSearch from 'youtube-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const GOOGLE_KEY = "AIzaSyC8ew0DgXP36CquBiAw75B7hWRsfvRxhDs"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount() {
    this.search();
  }

  search () {
    youtubeSearch('블랙핑크', {key: GOOGLE_KEY }, (err, results) => {
      if (err) return console.log(err);
      console.log("results", results);
      this.setState({
        videos: results,
        selectedVideo: results[0]
      })
    });
  };

  render() {
    return (
      <div className="App container mt-3" >
        <SearchBar />
        <div className="row">
          <div className="col-8">
          </div>
          <div className="col-4">
          <VideoList videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
