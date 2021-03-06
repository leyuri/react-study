import React from 'react'
import './App.css';
import * as youtubeSearch from 'youtube-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

const GOOGLE_KEY = "AIzaSyCKce_FwWQ5nWPTFU6tgiZ0ZhlOTppEdDA"

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
    youtubeSearch(term, { maxResults: 7, key: GOOGLE_KEY }, (err, results) => {
      if (err) return console.log(err);
      console.log("results", results);
      this.setState({
        videos: results,
        selectedVideo: results[0]
      })
    });
  };

  regExp(str) {
    var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
    //특수 문자 검증
    if (reg.test(str)) {
      //특수 문자 제거후 리턴
      return str.replace(reg, "");
    } else {
      //특수 문자가 없으므로 본래 문자 리턴
      return str;
    }
  }

  render() {
    return (
      <div>
        <SearchBar term={this.state.term} onChange={(term) => { this.search(term); }} />
        <Container>
          <Row className="mt-4">
            <Col xs={12} md={8}>
              <VideoDetail video={this.state.selectedVideo} checkRegExp={this.regExp}/>
            </Col>
            <Col xs={6} md={4}>
              <VideoList videos={this.state.videos}
                onItemSelect={(video) => {
                  this.setState({ selectedVideo: video });
                }} 
                checkRegExp={this.regExp}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
