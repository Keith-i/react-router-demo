import React, { Component } from 'react'
import Demo2 from '../components/coms/Demo2'
import Demo3 from '../components/coms/Demo3'

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Demo2 />
        <Demo3 />
      </div>
    )
  }
}

export default Home