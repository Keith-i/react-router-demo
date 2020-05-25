import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Book extends Component {
  render() {
    return(
      <div>
        Book
        <ul>
          <li>
            <NavLink to="/book/webbook" exact>WEBBOOK</NavLink>
          </li>
          <li>
            <NavLink to="/book/javabook" exact>JAVABOOK</NavLink>
          </li>
        </ul>
        {/* 路由嵌套显示的位置 */}
        { this.props.children }
      </div>
    )
  }
}

export default Book