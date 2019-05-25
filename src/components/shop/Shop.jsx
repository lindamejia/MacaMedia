import React, { Component } from "react";
// import ProductsSlideshow from "./ProductsSlideshow";
// import { connect } from "react-redux";
// import * as actionCreators from "../../actions/index.js";
// import Cart from "../shopify/Cart";
// import store from "./store";
import Products from "./Products";
import ProductsForm from "./ProductsForm";

class Shop extends Component {
  render() {
    // const state = store.getState();
    return (
      <div style={{ marginTop: "100px" }}>
        <div>
          <button onClick={this.props.handleCartOpen}>
            Shopify Cart (I work! CLICK ME!)
          </button>
        </div>
        <ProductsForm />
        <div style={{ display: "inline-block" }}>
          <Products />
        </div>
      </div>
    );
  }
}

export default Shop;
