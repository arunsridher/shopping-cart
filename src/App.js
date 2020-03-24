import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });

      // firebase
      // .firestore()
      // .collection("products")
      // .get()
      // .then(snapshot => {
      //   const products = snapshot.docs.map(doc => {
      //     const data = doc.data();
      //     data["id"] = doc.id;
      //     return data;
      //   });
      //   this.setState({ products: products, loading: false });
      // });
  }

  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].quantity += 1;

    this.setState({
      products
    });
  };

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].quantity === 0) {
      return;
    }
    products[index].quantity -= 1;

    this.setState({
      products
    });
  };

  handleDeleteProduct = id => {
    const { products } = this.state;

    const items = products.filter(product => product.id !== id);

    this.setState({
      products: items
    });
  };

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.quantity;
    });

    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.quantity > 0) {
        cartTotal = cartTotal + product.quantity * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  addProduct = () =>{
    firebase
      .firestore()
      .collection('products')
      .add({
        title: 'Washing Machine',
        price: 24999,
        quantity: 2,
        img: ''
      })
      .then((docRef) => {
        console.log("Product has been added ", docRef);
      })
      .catch((error) => {
        console.log("Couldn't add product to firebase: ", error);
      })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <button onClick={this.addProduct} style={{padding: 20, fontSize:20}}>Add product</button>
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
