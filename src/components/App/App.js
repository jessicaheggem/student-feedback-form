import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route exact path="/" />
            <Feeling />
          <Route path="/understanding" component={Understanding}/>
          <Route path="/support" component={Support}/>
          <Route path="/comments" component={Comments}/>
          <Route path="/reviewFeedback" component={ReviewFeedback}/>

        </ Router>
      </div>
    );
  }
}

export default App;
