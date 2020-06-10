import React, { Component } from 'react'

class Dchild extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.num === this.props.num) {
      return false
    } else {
      return true
    }
  }

  render() {
    console.log("child -> render")
    return (
      <div>child: { this.props.num }</div>
    )
  }
}

export default Dchild