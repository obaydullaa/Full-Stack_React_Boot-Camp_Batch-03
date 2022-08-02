import React from "react";
import styles from './Card.module.css'
// import logo from './logo512.png'

class  CardNumClass extends React.Component {

    pickedCardNum = () => {
        this.props.pickedCardNumParent(this.props.cardNum)
    }

    render() {
        // const {card: {title, description, image}} = this.props;
        return (
            <div>
                {/* <img src={logo} alt="logo" /> */}
                <h4 className={styles.card} onClick={this.pickedCardNum} > {this.props.cardNum}</h4>
                {/* <img src={image} alt="use logo" />
                <h2>{title}</h2>
                <p>{description}</p> */}
            </div>
        )
        
    }
}

export default CardNumClass;