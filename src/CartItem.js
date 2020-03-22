import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Phone',
            price: 999,
            quantity: 1,
            img: ''
        }

        // this.decreaseQuantity = this.decreaseQuantity.bind(this);

        // this.testing();
    }

    // testing(){
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     });

    //     promise.then(() => {
    //         this.setState( {quantity: this.quantity + 10});

    //         this.setState( {quantity: this.quantity + 10});
            
    //         this.setState( {quantity: this.quantity + 10});
            
    //         console.log('state ', this.state);
    //     });
    // }

    increaseQuantity(){
        // this.state.quantity += 1;

        // setState form 1 - use form 1 when you dont need previous form
        // this.setState({
        //     quantity: this.state.quantity + 1
        // }, () => {
        // console.log('this.state ', this.state);    
        // });

        //setState form 2 - when you need previous state
        this.setState((prevState) => {
            return{
                quantity : prevState.quantity + 1
            }
        });
    }

    decreaseQuantity = () =>{
        this.setState((prevState) => {
            return{
                quantity: prevState.quantity > 1 ? prevState.quantity - 1: 0
            }
        }, () => {
            console.log('set state completed; this.state ', this.state);
        });
    }

    render(){
        const {title, price, quantity, img} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={img} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs {price}</div>
                    <div style={ { color: '#777' } }>Qty: {quantity}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt = "increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                            onClick = {this.increaseQuantity.bind(this)} />
                        <img 
                            alt = "decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg" 
                            onClick = {this.decreaseQuantity} />
                        <img 
                            alt = "delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                            onClick = {this.deleteItem} />
                    </div>
                </div>
            </div>
        );
    }
}

const styles ={
    image: {
        width: 135,
        height: 135,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;