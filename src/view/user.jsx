import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../action/user'

let textCenter = { textAlign: 'center', width: '100px', color: 'red' }
class user extends Component {
  render() {
    const { error, isFetching, user } = this.props.user
    console.log(isFetching, 'xxxx')
    let data
    if (error) {
      data = error
    } else if (isFetching) {
      data = "Loading..."
    } else {
      data = user.title
    }
    return(
      <div className="continer">
        <p style={textCenter}>{data}</p>
        <p>{this.props.user.user.content}</p>
        <button onClick={() => this.props.userAction.get_user()}>测试</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'user')
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(userAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(user)