import React, { Component } from 'react'
import {
  Link
} from "react-router-dom"

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/my">MY</Link>
          </li>
          <li>
            <Link to="/my/ucenter">UCENTER</Link>
          </li>
          <li>
            <Link to="/demo">DEMO</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav