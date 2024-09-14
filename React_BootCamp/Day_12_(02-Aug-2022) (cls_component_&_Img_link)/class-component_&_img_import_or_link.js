/**
 * 1. Class based component
 * 2. comparing class based component with Functional component
 * 3. Image Import(card)
 */

/**
 * function component এ ব্রাউজারে দেখানোর জন্য return দিয়ে ছিলাম বাট class component এ render method must use করতে হবে ।  এর ভিতর থেকে রিটার্ন করতে হবে । render() { return()}
 * 
 * এখন আমরা App.js Deal korbo na. AppClass.js file create korbo & index.js ar modde AppClass.js import korbo & ReactDOM.render korbo.
 
    ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <AppClass />
    </React.StrictMode>,
    document.getElementById('root')
    );

*/

// Class Component write Rules

 import React from "react";

 class AppClass extends React.Component {
    render(){
        return (

        )
    }
 }
 
 export default AppClass;

 /**
  * আমরা যদি class base component এ function or method ke reffer korte chai thole always incrementCount() {} এভাবে দেখাতে হবে। এবং এটা this.incrementCount এভাবে একসেস করতে হবে। 
  

    property = evane leikhe hoi
    method() { }  //commmon
    method = () => { }  // Uncommmon
  */

  class AppClass extends React.Component {
    incrementCount() {
        console.log('Increment Count') // increment button a click korle console dakte pabo.
    }
    render() {
        return(
            <div className="app">
                <p>Count: {1}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}

/**
 * Class base component a state = {} এভাবে নিতে হবে । আর functional component a useState()  diye nitam. class component a data update korar jonno react mehtod দিয়েছে  seta holo -> setState({ })
 
    incrementCount() {
        console.log(this.state) // Appclass.js:11 Uncaught TypeError: Cannot read properties of undefined 
        this.setState({
        count: 3,
        })
    }
    console undefined dakhabe 

    render() {
        console.log(this) এর মধ্য কনসোল করে দেখি তাহলে দেখ this বলতে AppClass কে বুজাচ্ছে । 

    এই this এর ইরোর আমরা ৩ ভাবে সল্ভ করতে পারি ।

     1: ( Arro Function)
    -----------------------------
        incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    <button onClick={this.incrementCount}>Increment</button>

     2: ( Call in JSX)
    ------------------------------
    incrementCount যেখানে কল করার সময় this কে বলে দিতে পারি । 
    incrementCount() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    <button onClick={this.incrementCount.bind(this)}>Increment</button>

     3.  (constructor)
    -------------------------
      constructor(props){
        super(props)
        this.incrementCount = this.incrementCount.bind(this)
    }
        
    incrementCount() {
        this.setState({
            count: this.state.count + 1,
        })
    }

    <button onClick={this.incrementCount}>Increment</button>



     যদি  state এর ভ্যালু আগের state এর উপর Depended থাকে তাহলে callback use kora uchit. and object এর মধ্য return করতে হবে। 
     যেমনঃ

    incrementCount = () => {
        // this.setState({
        //     count: this.state.count + 1,
        // })

        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            }
        })
    }
    এটা আমর এক লাইনেও করতে পারি । 
     // One line return
        this.setState((prevState) => ({
           count: prevState.count + 1,
            
        }))

 * 
 */

        
// AppClass.js ->
import React from "react";

class AppClass extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.incrementCount = this.incrementCount.bind(this)
    // }
    state = {
        count: 0,
        randomCards: [30, 33, 37, 42]
    }

    incrementCount = () => {
        // this.setState({
        //     count: this.state.count + 1,
        // })

        // Dabble line return
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 1,
        //     }
        // })

        // One line return
        this.setState((prevState) => ({
           count: prevState.count + 1,
            
        }))
    }

    decrementCount = () => {
        // this.setState({
        //     count: this.state.count - 1,
        // })
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            }
        })
    }
    resetCount = () => {
        this.setState({
            count: 0,
        })
    }

    render() {
        return(
            <div className="app">
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
                <button onClick={this.resetCount} >Reset</button>
            </div>
        )
    }
}

export default AppClass;


// create -> OddOrEvenClass.js file

/**
    class component likbo ....
    akhon Appclass.js add korbo and sekhan thake count pathabo amra destructure kore nibo const {count} = this.state;


    AppClass.js -> <OddOrEvenClass count={this.state.count}/>

    OddOrEvenClass.js amra props hisabe receive korte hobe.. -> <h4>{this.props.count % 2 === 0 ? 'Even': 'Odd'}</h4>

 */

    // OddOrEvenClass.js ->

    import React from "react";

class OddOrEvenClass extends React.Component {
     render() {
       
        return (
            <div>
            <h3>Counter</h3>
            <h4>{this.props.count % 2 === 0 ? 'Even': 'Odd'}</h4>

        </div>
        )
     }
}

export default OddOrEvenClass;


/**
 * // Create CardNumClass.js file -> 
    class component create and copy from CarNum.js code.

    import React from "react";

    import styles from './Card.module.css'

    class CardNumClass extends React.Component {
        render() {
        return (
            <h4 className={styles.card}> {this.props.cardNum}</h4>
        )
            
        }
    }
    export default CardNumClass;


// AppClass.js
    render() {
        const {count, randomCards} = this.state;
        return (
                <OddOrEvenClass count={count}/>
                {randomCards.map((cardNum) => (
                        <CardNumClass cardNum={cardNum} key={cardNum} />
                    ))}
                
            </div>
        )
    }

 */

// CardNumClass.js ->
    import React from "react";

    import styles from './Card.module.css'
    
    class CardNumClass extends React.Component {
    
        prickedCardNum = () => {
            this.props.prickedCardNum(this.props.cardNum)
        }
    
        render() {
            return (
                <h4 className={styles.card} onClick={this.prickedCardNum} > {this.props.cardNum}</h4>
                
            )
            
        }
    }
    
    export default CardNumClass;

    // AppClass.js -> 
    
    state = {
        count: 0, 
        randomCards: [30, 33, 37, 42],
        pickedValue: null, // work
    }

    render() {
        const {count, randomCards, pickedValue} = this.state; // Work
        return (
            <div className="app">
                <OddOrEvenClass count={count} pickedValue={pickedValue}/>
                {randomCards.map((cardNum) => (
                        <CardNumClass cardNum={cardNum} key={cardNum} prickedCardNum={this.prickedCardNum}/>
                    ))}
                
            </div>
        )
    }
}

// OddOrEvenClass.js ->
import React from "react";

class OddOrEvenClass extends React.Component {
     render() {
       const {count, pickedValue} = this.props
        return (
            <div>
            <h3>Counter</h3>
            {count && <h4>{count % 2 === 0 ? 'Even': 'Odd'}</h4>}

            <h3>Card Num</h3>
            {pickedValue ? <h4>{pickedValue % 2 === 0 ? 'Even': 'Odd'}</h4> : <h4>You have't picked a number yet !!</h4>}
            
        </div>
        )
     }
}

export default OddOrEvenClass;



/***
 * আমরা ওয়েবসাইটে ইমেজ ৩ ভাবে এড করতে পারি ।
 ===========================================================================================================

    1:
    -----------
      public folder এ ইমেজ রেখে সেটা আমরা ইউজ করতে পারি । exam:

      CardNumClass.js
          render() {
        return (
            <div>
                <img src="logo192.png" alt="logo" /> // work
                <h4 className={styles.card} onClick={this.prickedCardNum} > {this.props.cardNum}</h4>
            </div>
        )

     2:
    -----------
        src -> folder ---->  এ ইমেজ রেখে লিংক করে দিতে পারি ।  import kore use korte hobe যেমনঃ

        import logo from './logo512.png' // work


            render() {
        return (
            <div>
                <img src={logo} alt="logo" /> // work
                <h4 className={styles.card} onClick={this.prickedCardNum} > {this.props.cardNum}</h4>
            </div>
        )
        
    }

     3:  public folder unojai serve korte hobe public(/logo192.png)
    -----------------------------------------------------------------------
    AppClass.js
        const bdCards = [
        {
            image: '/logo192.png',
            title: 'Sample Title 1',
            description: 'Sample Description 1',
        },
        {
            image: '/logo192.png',
            title: 'Sample Title 2',
            description: 'Sample Description 2',
        },
        {
            image: '/logo192.png',
            title: 'Sample Title 3',
            description: 'Sample Description 3',
        }
    ]

        render() {
        const {count, randomCards, pickedValue} = this.state;
        return (
            <div className="app">
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
                <button onClick={this.resetCount} >Reset</button>
                <OddOrEvenClass count={count} pickedValue={pickedValue}/>
                {/* {randomCards.map((cardNum) => (
                        <CardNumClass cardNum={cardNum} key={cardNum} prickedCardNum={this.prickedCardNum}/>
                    ))} */}

                    {bdCards.map((card, index) => (
                        <CardNumClass card={card} key={index} />
                    ))}
                
            </div>
        )
    }



    //CardNumClass.js ->

    render() {
        const {card: {title, description, image}} = this.props;
        return (
            <div>
                {/* <img src={logo} alt="logo" />
                <h4 className={styles.card} onClick={this.prickedCardNum} > {this.props.cardNum}</h4> */}
                <img src={image} alt="use logo" />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        )
        
    }

