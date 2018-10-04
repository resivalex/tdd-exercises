import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = { value: this.props.initial || 0 }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ value: this.state.value - 1 })}>Decrement</button>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>Increment</button>
        <button onClick={() => this.setState({ value: Math.floor(Math.random() * 1e6) })}>
          Randomize
        </button>
        <span>{this.state.value}</span>
      </div>
    )
  }
}
