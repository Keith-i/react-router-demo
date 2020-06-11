import React, { Component } from 'react'

/**
 * 高阶组件
 * 1.函数
 * 2.参数是一个组件
 * 3.返回值也是一个组件
 */

const withFetch = (ComposeComponent) => {
  return class extends Component {
    render() {
      return(
        <ComposeComponent {...this.props} />
      )
    }
  }
}

class MyData extends Component {
  render() {
    return (
      <div>
        MyData: {this.props.data}
      </div>
    )
  }
}

const WithFetch = withFetch(MyData)

class Demo4 extends Component {
  render() {
    return (
      <div>DEMO4：
        <WithFetch data="Hello WithFetch！" />
      </div>
    )
  }
}

export default Demo4