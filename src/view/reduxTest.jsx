import React, { Component } from 'react'
// import { createStore } from 'redux'
// import counter from '../reducers/counter'
import { connect } from 'react-redux'
// import { increment, decrement } from '../action/counter'
import * as counterAction from '../action/counter'
import { bindActionCreators } from 'redux'

// 创建store仓库
// const store = createStore(counter)
// store.subscribe(() => {
//     console.log('state:', store.getState())
// })

class reduxTest extends Component {
  render() {
    console.log(this.props)
    // const {increment, decrement} = this.props
    return (
      <div>
        reduxTest{this.props.counter}
        {/* <button onClick={ () => increment() }>增加</button>
        <button onClick={ () => decrement() }>减少</button> */}
        <button onClick={ () => this.props.counterAction.increment(10) }>增加</button>
        <button onClick={ () => this.props.counterAction.decrement(5) }>减少</button>
      </div>
    )
  }
}
// function reduxTest() {
//   return (
//     <div>
//       reduxTest{ store.getState() }
//       <button onClick={ () => store.dispatch({ type: 'INCREMENT' }) }>增加</button>
//       <button onClick={ () => store.dispatch({ type: 'DECREMENT' }) }>减少</button>
//     </div>
//   )
// }

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  // return {
  //   increment: () => { dispatch(increment()) },
  //   decrement: () => { dispatch(decrement()) }
  // }
  return {
    counterAction: bindActionCreators(counterAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxTest)