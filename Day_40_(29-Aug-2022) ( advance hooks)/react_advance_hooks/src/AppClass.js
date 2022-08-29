import React from "react";
import CardNumClass from "./CardNumClass";
import OddOrEvenClass from "./OddOrEvenClass";



class AppClass extends React.Component {

  constructor(props) {
    super(props)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleReset = this.handleReset.bind(this)
    // latest version
    this.state = {
      count: 0,
      randomCards: [30, 33, 37, 42],
      pickedValue: null
    }
  }

  // Old version
  // state = {
  //   count: 0,
  //   randomCards: [30, 33, 37, 42]
  // }

  handleIncrement() {
    // console.log('Increment count')
    // console.log( this )
    // this.setState({
    //   count: this.state.count + 1,
    // })

    this.setState((prevState) =>  ({
      count: this.state.count + 1,
  }))
  }

  handleDecrement() {
    this.setState((prevState) =>  ({
      count: this.state.count - 1,
  }))
  }
 
  handleReset = () => {
    this.setState({
      count: 0,
    })
  }

  pickedCardNumParent = (cardNum) => {
    this.setState({
      pickedValue: cardNum
    })
    console.log(cardNum)
  }

  render() {
    const {count, randomCards, pickedValue} = this.state
    return (
      <div className="counter-box">
        <h2>Count: {this.state.count} </h2>
        {/* <button onClick={this.handleIncrement.bind(this)}>Increment</button> */}
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset} className="reset-btn">Reset</button>
        <OddOrEvenClass count={count} pickedValue={pickedValue}/>
        {randomCards.map(cardNum => 
        <CardNumClass cardNum={cardNum} key={cardNum} pickedCardNumParent={this.pickedCardNumParent}/> )}
        
      </div>
    )
  }
}

export default AppClass;