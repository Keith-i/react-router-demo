import React, { Component } from 'react'

class Child extends Component {
  clickHander = (e) => {
    this.props.onMyEvent("父标题")
  }
  render() {
    return(
      <div>
        Child:{this.props.title}
        <button onClick={this.clickHander}>传递数据</button>
      </div>
    )
  }
}

export default Child