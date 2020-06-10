import React, { Component } from 'react'
import Dchild from './Dchild'
import Dchild1 from './Dchild1'

const MyAPI = {
  count: 0,
  subscribe(cb) {
    this.intervalId = setInterval(() => {
      this.count += 1
      cb(this.count)
    }, 1000)
  },
  unSubscribe() {
    clearInterval(this.intervalId)
    this.reset()
  },
  reset() {
    this.count = 0
  }
}

class Dparent extends Component {

  state = {
    count: 0
  }

  componentDidMount() {
    MyAPI.subscribe((currentCount) => {
      this.setState({
        count: currentCount
      })
    })
  }

  componentWillUnmount() {
    MyAPI.unSubscribe()
  }

  render() {
    console.log("parent -> render")
    return (
      <div>
        Hello：{this.state.count}
        <Dchild num={this.state.count} />
        <Dchild1 num={this.state.count} />
      </div>
    )
  }
}

export default Dparent