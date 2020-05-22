import React from 'react';
import RouterDemo from './view/routerDemo'
import Home from './view/home'
import My from './view/my'
import Nav from './view/Nav'
import Ucenter from './view/Ucenter'
import Newtest from './view/newtest'
import NotFound from './view/NotFound'
import Demo from './view/demo'
import Shop from './view/shop'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
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
          <Route path="/my/ucenter/:id" component={ Ucenter } exact></Route>
          <Route path="/demo" render={ (props) => <Demo {...props} name="你好" /> }></Route>
          <Route path="/newtest" component={ Newtest }></Route>
          <Redirect from="/hellomy" to="/my" exact></Redirect>
          <Route path="/shop" component={ Shop }></Route>
          <Route component={ NotFound }></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
