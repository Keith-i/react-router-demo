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
  return(
    <div>
      pp：
      <button onClick={ clickHandle }>跳转到Demo页</button>
    </div>
  )
}

export default withRouter(MyDemo)