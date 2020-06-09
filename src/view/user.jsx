import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../action/user'

let textCenter = { textAlign: 'center', width: '100px' }
class user extends Component {
  render() {
    return(
      <div className="continer">
        <p style={textCenter}>{this.props.user}</p>
        <button onClick={() => this.props.userAction.addUser('userTXT')}>测试</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'user')
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(userAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(user)