import React, { Component } from 'react'

let Newtest = (props) => {
  console.log(props)
  let params = new URLSearchParams(props.location.search)
  let aa = params.get('aa')
  let bb = params.get('bb')
  return(
   <div>Newtest: {aa} - {bb}</div>
  )
}

export default Newtest