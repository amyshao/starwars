import React from 'react';
import './App.css';
import JsonData from "./JsonData";
import { Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import Nav from "./Nav";


function App() {
    // for http calls
    let film_http = "https://swapi.py4e.com/api/films/";
    let char_http = "https://swapi.py4e.com/api/people/";
    // for looping routes
    let movieCount = 7;
    let charCount = 10;
    let movieArray = [...Array(movieCount).keys()];
    let charArray = [...Array(charCount).keys()];

    return (
        <div className="App">
              <Router>

                  <header className="App-header">
                    <Nav />
                  </header>

                  <div className="Body-Container">
                      <Switch>
                          <Route exact path="/Movies">
                              <JsonData type={"Movies"} page={'home'} http_link={film_http} key={'Movies'}/>
                          </Route>
                          {movieArray.map((item, index) => (
                              <Route exact path={"/Movies/" + index}>
                                  <JsonData type={"Movies"} page={item} http_link={film_http} key={'Movies' + index}/>
                              </Route>
                          ))}
                          <Route exact path="/Characters">
                              <JsonData type={"Characters"} page={'home'} http_link={char_http} key={'Char'}/>
                          </Route>
                          {charArray.map((item, index) => (
                              <Route exact path={"/Characters/" + index}>
                                  <JsonData type={"Characters"} page={item} http_link={char_http} key={'Char' + index}/>
                              </Route>
                          ))}
                      </Switch>
                  </div>

              </Router>
        </div>
    );
}

export default App;
