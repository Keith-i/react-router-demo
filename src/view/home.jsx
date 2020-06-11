import React, { Component } from 'react'
import Demo2 from '../components/coms/Demo2'
import Demo3 from '../components/coms/Demo3'
import Demo4 from '../components/coms/Demo4'
import Banner from '../components/coms/Demo5/New/NewBanner'
import SixParent from '../components/coms/Demo6/sixParent'

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Demo2 />
        <Demo3 />
        <Demo4 />
        <Banner />
        <SixParent />
      </div>
    )
  }
}

export default Home