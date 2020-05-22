import React, { Component } from 'react'
import qs from 'querystring'

let Newtest = (props) => {
  console.log(props)
  /**
   * ## 第一种读取方案
   */
  // let params = new URLSearchParams(props.location.search)
  // let aa = params.get('aa')
  // let bb = params.get('bb')

  /**
   * ## 第二种读取方案
   */
  let regular = /\?/gi
  let str = props.location.search.replace(regular, '')
  let params = qs.parse(str)
  console.log(str)
  let {aa, bb} = params
  console.log(params, 'z')
  return(
   <div>Newtest: {aa} - {bb} </div>
  )
}

export default Newtest