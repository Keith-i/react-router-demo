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
import Test from './view/test'
import Book from './view/book'
import WEBbook from './view/bookChildren/WEBbook'
import JAVAbook from './view/bookChildren/JAVAbook'
import Parent from './components/coms/Parent'
import ReduxTest from './view/reduxTest'
import User from './view/user'
import Dparent from './components/coms/Demo1/Dparent'
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
          <Route path="/shop" component={ Shop } exact></Route>
          <Route path="/test" component={ Test } exact></Route>
          <Route path="/demo1" component={ Dparent } exact ></Route>
          {/* <Route path="/book" component={ Book }></Route> */}
          {/* <Route path="/reduxTest" component={ reduxTest } exact></Route> */}
          <Book exact>
            <Switch>
              <Route path="/book/webbook" component={WEBbook}></Route>
              <Route path="/book/javabook" component={JAVAbook}></Route>
            </Switch>
          </Book>
          <Route component={ NotFound }></Route>
        </Switch>
      </Router>

      <Parent />
      <ReduxTest />
      <User />
    </div>
  );
}

export default App;
