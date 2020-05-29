import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// class MyDemo extends Component {
//   clickHandle = () => {
//     console.log(this.props)
//   }

//   render() {
//     return(
//       <div>
//         pp：
//         <button onClick={ this.clickHandle }>回到首页2</button>
//       </div>
//     )
//   }
// }

const MyDemo = (props) => {
  let clickHandle = () => {
    console.log(props)
    props.history.push('/demo')
  }
  let clickHandle2 = () => {
    console.log(props)
    props.history.replace('/demo')
  }
  return(
    <div>
      子元素pp：
      <button onClick={ clickHandle }>跳转到Demo页 push方式</button>
      <button onClick={ clickHandle2 }>跳转到Demo页 replace方式</button>
    </div>
  )
}

export default withRouter(MyDemo)