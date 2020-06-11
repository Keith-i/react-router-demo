import React, { Component } from 'react'

class ErrorBoundary extends Component {

  state = {
    hasErrors: false,
    error: null,
    errorInfo: null
  }

  /**
   * 子元素发生错误时触发
   */
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasErrors: true,
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasErrors) {
      return (
        <div>{ this.props.render(this.state.error, this.state.errorInfo) }</div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary