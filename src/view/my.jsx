import React, { Component } from 'react'
import MyDemo from './myDemo'

class My extends Component {

  constructor(props) {
    super(props)
  }

  clickHandle = () => {
    console.log("事件", this.props)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>my：
        <button onClick={ this.clickHandle }>返回首页</button>
        <MyDemo />
      </div>
    )
  }
}

export default My