import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products: [
                {
                    title: 'Watch',
                    price: 9999,
                    quantity: 4,
                    img: '',
                    id: 1
                },
                {
                    title: 'Phone',
                    price: 29999,
                    quantity: 1,
                    img: '',
                    id: 2
                },
                {
                    title: 'laptop',
                    price: 99999,
                    quantity: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].quantity += 1;

        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].quantity = products[index].quantity > 0 ? products[index].quantity - 1: 0;

        this.setState({
            products: products //same as products = products
        })
    }

    render(){
        const products = this.state.products;
        return(
            <div className = "cart">
                {products.map((product) => {
                    return(
                        <CartItem 
                            product = {product} 
                            key = {product.id} 
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity = {this.handleDecreaseQuantity}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;