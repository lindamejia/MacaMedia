import React, { Component } from "react";
import { Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Releases from "./components/releases/Releases";
import Artists from "./components/artists/Artists";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
// import Products from "./components/shop/Products";
// import ProductsForm from "./components/shop/ProductsForm";
import "./App.css";

//redux stuff
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <Header />

          <Route exact path="/" render={props => <Home {...props} />} />

          {/* <ProductsForm />
            <Products /> */}
          {/* <Route path="/shop" render={props => <Shop {...props} />} /> */}
          <Route path="/releases" render={props => <Releases {...props} />} />
          <Route path="/artists" render={props => <Artists {...props} />} />
          <Route path="/contact" render={props => <Contact {...props} />} />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
