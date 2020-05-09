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
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/my">MY</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav