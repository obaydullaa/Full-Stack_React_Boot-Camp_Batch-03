import React, { Component } from 'react'
import CounterClass from './CounterClass'

export default class AppClass extends Component {
  constructor() {
    //initialization
    //state declaration
    super()
    this.state = {
      title: 'Hello From App Class',
      showCounter: true,
    }
    console.log('AppClass: constructor')
  }

  static getDerivedStateFromProps() {
    console.log('AppClass: getDerivedStateFromProps')
    // manipulate state based on parent props
    return true
  }
  componentDidMount() {
    //API Request
    //Side Effects(Accessing DOM, Subscription)
    console.log('AppClass: componentDidMount')
  }

  toggleCounter = () => {
    this.setState({
      showCounter: this.state,
    })
  }

  render() {
    console.log('AppClass: Render')
    console.log('showing the output')
    const { showCounter, title } = this.state

    return (
      <>
        <h2>Introduction to LifeCycle Method</h2>
        <button onClick={this.toggleCounter}>Toggle Counter</button>
        {showCounter ? (
          <CounterClass appTitle={title} />
        ) : (
          <h3>Hidden Counter component</h3>
        )}
      </>
    )
  }
}
