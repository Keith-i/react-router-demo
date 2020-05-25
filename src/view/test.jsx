import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

class test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'aa'
    }
  }

  hander = (e) => {
    console.log(e, e.target, e.target.value)
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return(
      <div>测试：{this.state.name}
        <Prompt
          when={!!this.state.name}
          message={ '确定关闭页面？' }
        />
        <input type="text" value={this.state.name} onChange={ this.hander } />
      </div>
    )
  }
}

export default test