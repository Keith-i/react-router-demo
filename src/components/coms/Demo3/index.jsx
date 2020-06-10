import React, { Component } from 'react'

const colorContext = React.createContext("blue")

const Topic = () => {
  // let color = colorContext
  return (
    <div>
      {/* { this.color } */}
      <Comment />
    </div>
  )
}

// 写法1
// class Comment extends Component {
//   static contextType = colorContext;
//   render() {
//     console.log(this, 'x')
//     return (
//       <div>
//         comment: { this.context }
//       </div>
//     )
//   }
// }

// 写法2
const Comment = () => {
  return (
    <colorContext.Consumer>
      { (color) => {
        return (<div>comment: {color}</div>)
      } }
    </colorContext.Consumer>
  )
}

class Demo3 extends Component {
  render() {
    return (
      <div>DEMO3
        <colorContext.Provider value="red">
          <Topic />
        </colorContext.Provider>
      </div>
    )
  }
}

export default Demo3