import React, { Component } from 'react'

class Ucenter extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
    <div>Ucenter：{ this.props.match.params.id }</div>
    )
  }
}

export default Ucenter