import React from 'react';
import RouterDemo from './view/routerDemo'
import Home from './view/home'
import My from './view/my'
import Nav from './view/Nav'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div>
      <RouterDemo />
      <Router>
        <Nav />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/my">
          <My />
        </Route>
      </Router>
    </div>
  );
}

export default App;
