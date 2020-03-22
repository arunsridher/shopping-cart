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
        if(products[index].quantity == 0){
            return;
        }
        products[index].quantity -= 1;

        this.setState({
            products: products //same as products = products
        })
    }

    handleDeleteProduct = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id); //copy all items except the one whose id matches

        this.setState({
            products: items
        });
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
                            onDeleteProduct = {this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;