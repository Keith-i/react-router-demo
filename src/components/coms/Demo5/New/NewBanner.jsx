import React, { Component } from 'react'
import withFetch from '../withFetch'

const Banner = withFetch('http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php')(props => {
  return (
    <div>
      <p>
        { props.data.chengpinInfo[0].title }
      </p>
    </div>
  )
})

export default Banner