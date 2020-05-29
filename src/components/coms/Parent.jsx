import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

  state = {
    value: ''
  }

  getData = (data) => {
    console.log(data)
    this.setState({
      value: data
    })
  }
  render() {
    return(
      <div>
        Parent: { this.state.value }
        <Child title="子标题" onMyEvent={this.getData} />
      </div>
    )
  }
}

export default Parent