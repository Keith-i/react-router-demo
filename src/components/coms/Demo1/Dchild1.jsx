import React, { Component, PureComponent } from 'react'
/** 
 * Component: 不会对数据进行比较
 * PureComponent: 对数据进行浅比较
*/

class Dchild1 extends PureComponent {

  render() {
    console.log("child1 -> render")
    return (
      <div>child1: { this.props.num }</div>
    )
  }
}

export default Dchild1