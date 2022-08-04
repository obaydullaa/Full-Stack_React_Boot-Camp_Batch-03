import React, { Component } from 'react'

export default class CounterClass extends Component {
  state = {
    count: 0,
    title: 'From Counter component ',
  }

  countTimer
  static getDerivedStateFromProps(props, state) {
    // console.log('CounterClass: getDerivedStateFromProps')
    // // manipulate state based on parent props
    // return {
    //   title: props.appTitle,
    // }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('CounterClass: shouldComponentUpdate')
    return true
  }

  componentDidMount() {
    // this.countTimer = setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   })
    // }, 1000)
  }
  componentWillUnmount() {
    // clearInterval(this.countTimer)
    console.log('CounterClass: componentWillUnmount')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('CounterClass: getSnapshotBeforeUpdate')
    //Manual DOM selection, update
    return 'something'
  }

  componentDidUpdate(props, state, snapShot) {
    //Same Link ComponentDidMount
    console.log(snapShot)
    document.querySelector('h3').textContent = snapShot
    console.log('CounterClass: componentDidUpdate')
  }

  handleIncrement = (num) => {
    this.setState({
      count: this.state.count + num,
    })
    this.forceUpdate()
  }
  handleDecrement = (num) => {
    this.setState({
      count: this.state.count - num,
    })
  }

  handleReset = () => {
    this.setState({
      count: 0,
    })
  }
  render() {
    const { title } = this.state
    console.log('CounterClass: render')
    return (
      <div className='container'>
        <h2>Count : {this.state.count}</h2>
        <h3>{title}</h3>
        <button onClick={() => this.handleIncrement(1)}>Increment</button>
        <button onClick={() => this.handleDecrement(1)}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
