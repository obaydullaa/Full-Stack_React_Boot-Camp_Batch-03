import React from "react";

class OddOrEvenClass extends React.Component {
render(){
   const {count, pickedValue} = this.props;
  return (
        <div>
            <h3>Counter</h3>
            <h4>{count % 2 === 0 ? 'Even': 'Odd'}</h4>

            <h3>Card Num</h3>
          {pickedValue ? <h4>{pickedValue % 2 === 0 ? 'Even': 'Odd'}</h4> : <h4>You have't picked a number</h4>}
        </div>
  )
  }
}



export default OddOrEvenClass;