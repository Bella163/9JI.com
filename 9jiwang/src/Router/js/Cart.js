import React, { Component } from "react";
import { connect } from "react-redux";
import "../SCSS/Cart.scss";

import CartHeader from "../../component/JS/CartHeader";
import CartItem from "../../component/JS/CartItem";
import CartRecommend from "../../component/JS/CartRecommend";
import CartFooter from "../../component/JS/CartFooter";
import { ADD_TO_CART } from "../../store/visibility";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveData: false
    };
    this.addToCart = this.addToCart.bind(this);

  }
  componentDidMount(){
    this.addToCart();
  }
  addToCart() {
    let cartList = JSON.parse(sessionStorage.getItem("cartList"));
    this.props.dispatch({
      type: ADD_TO_CART,
      payload: cartList
    });
    this.setState({
      haveData: true
    });
  }
  render() {
    return (this.state.haveData ? (
      <div className="wrapper full-height">
        <CartHeader />
        <CartItem />
        <CartRecommend />
        <CartFooter />
      </div>
    ) : (
      "loading..."
    ));
  }
}
export default connect(state => {
  return state;
})(Cart);
