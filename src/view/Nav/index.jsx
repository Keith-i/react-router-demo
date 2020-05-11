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
            <NavLink to="/my/ucenter" activeClassName="select" exact>UCENTER</NavLink>
          </li>
          <li>
            <NavLink to="/demo" activeClassName="select" exact>DEMO</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav