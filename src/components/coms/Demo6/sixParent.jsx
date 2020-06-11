import React, { Component } from 'react'
import Error from './Errors'
import ErrorBoundary from './ErrorBoundary'

class sixParent extends Component {
  
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <div>DEMO6: { this.state.count }</div>
        <ErrorBoundary render={ (error, errorInfo) => <p>{'组件发生错误' + error}</p> }>
          <Error />
        </ErrorBoundary>
        <button onClick={ this.increment }>increment-DEMO6BTN</button>
        <button onClick={ this.decrement }>decrement-DEMO6BTN</button>
      </div>
    )
  }
}

export default sixParent