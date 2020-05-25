import React, { Component, useState } from 'react'
import { Redirect } from 'react-router-dom'

let Shop = (Props) => {
  let [ isLogin, setIsLogin ] = useState(true)
  let [ name, setName ] = useState('aa')

  let hander = (e) => {
    console.log(e, e.target, e.target.value)
    setName(e.target.value)
  }

  return(
    <div>
      Shop：
      {
        isLogin?
        <div>Shoplogin</div>
        :
        <Redirect to="/" />
      }
      <input value={name} onChange={hander} />
    </div>
  )
}

export default Shop