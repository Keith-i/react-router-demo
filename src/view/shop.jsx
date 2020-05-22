import React, { Component, useState } from 'react'
import { Redirect } from 'react-router-dom'

let Shop = (Props) => {
  let [ isLogin, setIsLogin ] = useState(true)
  return(
    <div>
      Shop：
      {
        isLogin?
        <div>Shoplogin</div>
        :
        <Redirect to="/" />
      }
    </div>
  )
}

export default Shop