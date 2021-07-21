import React from 'react'
import './App.css';
import * as search from 'youtube-search';

import SearchBar from './components/search_bar'

function App() {

  var opts = {
    maxResults: 20,
    key: 'AIzaSyC8ew0DgXP36CquBiAw75B7hWRsfvRxhDs'
  };

  search('떡볶이', opts, function (err, results) {
    if (err) return console.log(err);
    console.dir(results);
  });

  return (
    <div className="App container mt-3">
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

export default App;
