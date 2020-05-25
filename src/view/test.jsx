import React, { Component } from 'react'

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
        <input type="text" value={this.state.name} onChange={ this.hander } />
      </div>
    )
  }
}

export default test