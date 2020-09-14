import React from 'react';
import './App.css';
import Row from './Row'
import request from './reques'
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGNALS" fetchUrl={request.fetchNetflix} isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={request.fetchAction}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedy}/>

      </div>
  );
}

export default App;
