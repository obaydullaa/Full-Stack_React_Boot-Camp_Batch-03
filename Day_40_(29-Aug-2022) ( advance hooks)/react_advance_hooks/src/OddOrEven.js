

const OddOrEven = ({count, pickedNum}) => {

    return (
        <div>
            <h3>Counter</h3>
            <h4>{count % 2 === 0 ? 'Even': 'Odd'}</h4>

            <h3>Card Num</h3>
            <h4>{pickedNum % 2 === 0 ? 'Even': 'Odd'}</h4>
        </div>  
    )
}

export default OddOrEven;