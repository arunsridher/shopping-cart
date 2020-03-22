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
                        <img alt = "increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg" />
                        <img alt = "decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1828/1828906.svg" />
                        <img alt = "delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
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