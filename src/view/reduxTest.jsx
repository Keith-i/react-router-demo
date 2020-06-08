import React, { Component } from 'react'
import { createStore } from 'redux'
import counter from '../reducers/counter'

// 创建store仓库
const store = createStore(counter)
store.subscribe(() => {
  console.log('state:', store.getState())
})

class reduxTest extends Component {
  constructor(props) {
    super(props)
  }

  zzx = () => {
    console.log(this)
  }

  render(props) {
    return (
      <div>
        reduxTest{this.props.sss}
        <button onClick={ () => store.dispatch({ type: 'INCREMENT' }) }>增加</button>
        <button onClick={ () => store.dispatch({ type: 'DECREMENT' }) }>减少</button>
        <button onClick={ this.zzx }>xxx</button>
      </div>
    )
  }
}

export default reduxTest