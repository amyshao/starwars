import React from 'react';
import './App.css';
import MovieList from "./MovieList";
import { Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import Nav from "./Nav";


//const Test = () => <h1>test</h1>

function App() {
  return (
    <div className="App">

          <Router>
              <header className="App-header">
                <Nav />
              </header>
              <div className="Body-Container">
                  <Switch>
                      <Route exact path="/"> <MovieList type={"home"} /> </Route>
                      <Route path="/0" render={props => <MovieList type={0} />} />
                      <Route path="/1" render={props => <MovieList type={1} />} />
                      <Route path="/2" render={props => <MovieList type={2} />} />
                      <Route path="/3" render={props => <MovieList type={3} />} />
                      <Route path="/4" render={props => <MovieList type={4} />} />
                      <Route path="/5" render={props => <MovieList type={5} />} />
                      <Route path="/6" render={props => <MovieList type={6} />} />
                  </Switch>
              </div>

          </Router>
    </div>
  );
}

export default App;
