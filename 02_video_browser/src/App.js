import React from 'react'
import './App.css';
import * as youtubeSearch from 'youtube-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const GOOGLE_KEY = "AIzaSyDxKteihYMZNzqoo6NfclPMO6Lk0u-M4NI"

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: "블랙핑크",
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount() {
    this.search(this.state.term);
  }

  search(term) {
    this.setState({ term: this.state.term });
    youtubeSearch(term, { maxResults: 10, key: GOOGLE_KEY }, (err, results) => {
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
        <SearchBar term={this.state.term} onChange={(term) => (this.search(term))} />
        <div className="row mt-3"> <div className="col-8">
          <VideoDetail video={this.state.selectedVideo} /> </div>
          <div className="col-4">
            <VideoList videos={this.state.videos}
              onItemSelect={(video) => {
                this.setState({ selectedVideo: video });
              }} /> </div>
        </div>
      </div>
    );
  }
}
