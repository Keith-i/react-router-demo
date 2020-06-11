import React, { Component } from 'react'

const withFetch = (url) => (View) => {
  return class extends Component {
    constructor() {
      super()
      this.state = {
        loading: true,
        data: null
      }
    }

    componentDidMount() {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data, 'data888')
        this.setState({
          loading: false,
          data: data
        })
      })
    }

    render() {
      if (this.state.loading) {
        return (
          <div>loadding...</div>
        )   
      } else {
        return <View data={this.state.data} />
      }
    }
  }
}

export default withFetch