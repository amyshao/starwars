import React from 'react';
import './App.css';
import JsonData from "./MovieList";
import { Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import Nav from "./Nav";


//const Test = () => <h1>test</h1>

function App() {
    let film_http = "https://swapi.py4e.com/api/films/";
    let char_http = "https://swapi.py4e.com/api/characters/";

  return (
    <div className="App">

          <Router>
              <header className="App-header">
                <Nav />
              </header>
              <div className="Body-Container">
                  <Switch>
                      <Route exact path="/"> <JsonData type={"home"} http_link={film_http}/> </Route>
                      <Route path="/0" render={props => <JsonData type={0} http_link={film_http}/>} />
                      <Route path="/1" render={props => <JsonData type={1} http_link={film_http}/>} />
                      <Route path="/2" render={props => <JsonData type={2} http_link={film_http}/>} />
                      <Route path="/3" render={props => <JsonData type={3} http_link={film_http}/>} />
                      <Route path="/4" render={props => <JsonData type={4} http_link={film_http}/>} />
                      <Route path="/5" render={props => <JsonData type={5} http_link={film_http}/>} />
                      <Route path="/6" render={props => <JsonData type={6} http_link={film_http}/>} />
                  </Switch>
              </div>

          </Router>
    </div>
  );
}

export default App;
