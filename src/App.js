import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Nav from "./Nav";
import LinkPage from "./LinkGroup";
import InfoPage from "./InfoPage";


function App() {

    // for looping routes
    let movieCount = 7;
    let charCount = 10;
    let movie = { name: 'Movies', keyArray: [...Array(movieCount).keys()] }; // keyArray of [0,..,movieCount-1]
    let character = { name: 'Characters', keyArray: [...Array(charCount).keys()] };
    let types = [movie, character];

    return (
        <div className="App">
              <Router>

                  <header className="App-header">
                    <Nav />
                  </header>

                  <div className="Body-Container">
                      <Switch>
                          <div>
                              {/* route link page and info page for each of movie, character */}
                              {types.map((type) => (
                                  <div>
                                      {/* link page */}
                                      <Route exact path={'/' + type.name}>
                                          <LinkPage type={type.name} key={type.name}/>
                                      </Route>
                                      {/* info page for each movie or character */}
                                      {type.keyArray.map((item, index) => (
                                          <Route path={'/' + type.name + '/' + index}>
                                              <InfoPage type={type.name} page={index} key={type.name + index}/>
                                          </Route>
                                      ))}
                                  </div>
                              ))}
                          </div>
                      </Switch>
                  </div>

              </Router>
        </div>
    );
}

export default App;
