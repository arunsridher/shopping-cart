import React from 'react';

class CartItem extends React.Component{
    render(){
        const {title, price, quantity} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
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
                            onClick = {() => this.props.onIncreaseQuantity(this.props.product)} />
                        <img 
                            alt = "decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1828/1828906.svg"
                            onClick = {() => this.props.onDecreaseQuantity(this.props.product)} 
                        />
                        <img 
                            alt = "delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        />
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