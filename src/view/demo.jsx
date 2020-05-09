import React, { Component } from 'react'

// let demo = (props) => {
//   console.log(props)
//   return (
//   <div>{props.name}</div>
//   )
// }

class demo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}

export default demo