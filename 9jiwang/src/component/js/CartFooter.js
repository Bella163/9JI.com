import React, { Component } from "react";
import { connect } from "react-redux";
import "../scss/CartFooter.scss";

class CartFooter extends Component {
  render() {
    return (
      <div className="cart-total">
        <div className="wrapper flex flex-justify-between flex-align-center">
          <div className="flex flex-center margin-left flex-child-noshrink">
            <span
              className="checkbox"
              style={{ borderColor: "rgb(204, 204, 204)" }}
            />
            <span style={{ marginLeft: "5px" }}>全选</span>
          </div>
          <div className="total-price flex flex-col flex-justify-center flex-align-end flex-child-average margin-right">
            <p>
              合计 ：<span className="red">￥0</span>
            </p>
            <p className="grey-9">共0件商品</p>
          </div>
          <a
            href="javascript:"
            className="settlement white flex-child-noshrink margin-left main-bgcolor"
          >
            去结算
          </a>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return state;
})(CartFooter);
