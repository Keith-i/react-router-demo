import React, { Component } from 'react'
import './style.css'
import {
  Link,
  NavLink
} from "react-router-dom"

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/" activeClassName="select" exact>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/my" activeClassName="select" exact>MY</NavLink>
          </li>
          <li>
            <NavLink to="/hellomy" activeClassName="select" exact>HELLOMY</NavLink>
          </li>
          <li>
            <NavLink to="/my/ucenter/1001" activeClassName="select" exact>UCENTER</NavLink>
          </li>
          <li>
            <NavLink to={{
              pathname: "/demo",
              search: '?name=123&age=xx',
              hash: '#the-hash',
              state: { flag: 'flag' }
            }} activeClassName="select" exact>DEMO</NavLink>
          </li>
          <li>
            <NavLink to="/newtest?aa=11&bb=22" activeClassName="select" exact>Newtest</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav