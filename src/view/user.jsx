import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../action/user'

let textCenter = { textAlign: 'center', width: '100px' }
class user extends Component {
  render() {
    return(
      <div className="continer">
        <p style={textCenter}>5555</p>
        <button onClick={this.props.userAction.addUser}>测试</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'user')
  return {
    counter: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(userAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(user)