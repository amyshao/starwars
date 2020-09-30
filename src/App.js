import React from 'react';
import './App.css';
import MovieList from "./MovieList";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

const Test = () => <h1>test</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <Switch>
                  <Route exact path="/"> <MovieList type={"home"} /> </Route>
                  <Route path="/0" render={props => <MovieList type={0} />} />
                  <Route path="/1" render={props => <MovieList type={1} />} />
                  <Route path="/2" render={props => <MovieList type={2} />} />
              </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;
