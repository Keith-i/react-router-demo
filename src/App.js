import React from 'react';
import RouterDemo from './view/routerDemo'
import Home from './view/home'
import My from './view/my'
import Nav from './view/Nav'
import Ucenter from './view/Ucenter'
import Newtest from './view/newtest'
import NotFound from './view/NotFound'
import Demo from './view/demo'
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
        <Switch>
          <Route path="/" component={ Home } exact></Route>
          <Route path="/my" component={ My } exact></Route>
          <Route path="/my/ucenter/:id" component={ Ucenter }></Route>
          <Route path="/demo" render={ (props) => <Demo {...props} name="你好" /> }></Route>
          <Route path="/newtest" component={ Newtest }></Route>
          <Route component={ NotFound }></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
