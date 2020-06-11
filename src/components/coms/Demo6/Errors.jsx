import React, { Component, Fragment } from 'react'

class ParErrent extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          {
            null.map((element, index) => {
              return <li key={index}>{element}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default ParErrent