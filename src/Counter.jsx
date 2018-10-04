import React, { Component } from 'react'
import Counter from './Counter'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.initial || 0 }
  }

  render() {
    return <div>
      <button onClick={() => this.setState({ value: this.state.value - 1 })}>Decrement</button>
      <span>{this.state.value}</span>
      <button onClick={() => this.setState({ value: this.state.value + 1 })}>Increment</button>
    </div>
  }
}
