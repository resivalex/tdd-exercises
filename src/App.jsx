import React, { Component } from 'react'
import Counter from './Counter'
import retrieveInitialValue from './retrieveInitialValue'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { value: null }
    retrieveInitialValue().then((value) => { this.setState({ value }) })
  }

  render() {
    const { value } = this.state

    return value && <Counter initial={value} />
  }
}
