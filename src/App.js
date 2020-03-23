import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [
            {
                title: 'Watch',
                price: 9999,
                quantity: 4,
                img: 'https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                id: 1
            },
            {
                title: 'Phone',
                price: 29999,
                quantity: 1,
                img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
                id: 2
            },
            {
                title: 'laptop',
                price: 99999,
                quantity: 1,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
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
    if(products[index].quantity === 0){
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

getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count += product.quantity;
  });

  return count;
}

getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.forEach((product) => {
    cartTotal += (product.quantity * product.price);
  });

  return cartTotal;
}

render(){
  const {products} = this.state;
  return (
    <div className="App">
      <Navbar count = {this.getCartCount()} />
      <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
      />
      <div style = {{padding:10, fontSize:20}}> Total: {this.getCartTotal()}</div>
    </div>
  );
} 
}

export default App;
