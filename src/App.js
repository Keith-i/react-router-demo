import React from 'react';
import RouterDemo from './view/routerDemo'
import Home from './view/home'
import My from './view/my'
import Nav from './view/Nav'
import Ucenter from './view/Ucenter'
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
        <Route path="/" component={ Home } exact></Route>
        <Route path="/my" component={ My } exact></Route>
        <Route path="/my/ucenter" component={ Ucenter }></Route>
      </Router>
    </div>
  );
}

export default App;
