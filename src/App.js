import React from 'react';
import './App.css';
import MovieList from "./MovieList";
import {Switch, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Switch>
                <Route path="/"><MovieList type={"home"}/></Route>
                <Route path="/1"><MovieList type={1}/></Route>
                <Route path="/2"><MovieList type={2}/></Route>
            </Switch>



      </header>
    </div>
  );
}

export default App;
