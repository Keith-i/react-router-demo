import React, { Component, Fragment } from 'react'

class Item extends Component {
  render() {
    return (
      <Fragment>
        <li>Demo2 Item1</li>
        <li>Demo2 Item1</li>
      </Fragment>
    )
  }
}

class Demo2 extends Component {
  render() {
    return (
      <div>DEMO2
        <ul>
          <Item />
        </ul>
      </div>
    )
  }
}

export default Demo2