import React, { Component, Fragment } from 'react'
import Counter from './Counter'
import retrieveInitialValue from './retrieveInitialValue'
import _ from 'lodash'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { values: [], isLoading: false }
  }

  componentDidMount() {
    this.addCounter()
  }

  render() {
    const { values, isLoading } = this.state

    return <Fragment>
      {_.map(values, (value, index) => {
        return <Counter key={index} initial={value} />
      })}
      {!isLoading && <button onClick={() => this.addCounter()}>Add Counter</button>}
    </Fragment>
  }

  addCounter() {
    const { values } = this.state

    this.setState({ isLoading: true })
    retrieveInitialValue(values.length).then((value) => {
      this.setState({ values: _.concat(values, value) })
    }).catch((e) => {
      alert(e)
    }).finally(() => {
      this.setState({ isLoading: false })
    })
  }
}
