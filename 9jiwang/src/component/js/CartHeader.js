import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "../scss/CartHeader.scss";

class CartHeader extends Component {
  render() {
    return (
      <Fragment>
        <div className="cart-head flex-child-noshrink ">
          <div style={{ height: "44px", transition: "height 0.2s ease 0s" }} />
          <header className="header fixed">
            <div className="wrapper" />
            <div
              className="main flex flex-justify-between relative"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                backgroundImage: `url(${require("../../assets/images/2018091809059840.png")})`
              }}
            >
              <div className="left-side">
                <a
                  href="javascript:;"
                  className="back-button flex flex-center"
                  style={{ color: "rgb(255, 255, 255)", paddingLeft: "0px" }}
                >
                  <i className="fa fa-angle-left font-30" />
                  <span className="back-text font-16" />
                </a>
              </div>
              <div
                className="title flex flex-center"
                style={{ left: "44px", right: "44px" }}
              >
                <h3 className="white font-18 normal" style={{ opacity: 0 }}>
                  购物车
                </h3>
              </div>
              <div className="right-side flex flex-center">
                <a
                  href="javascript:"
                  className="full-height padding-right flex flex-center white"
                >
                  <span>编辑</span>
                </a>
              </div>
              <div
                className="absolute full-width"
                style={{ top: "100%", zIndex: -1 }}
              />
            </div>
          </header>
        </div>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${require("../../assets/images/2018091809059840.png")})`
          }}
        />
        <div className="bg-card">
          <h2>购物车</h2>
          <p className="font-13" style={{ lineHeight: " 18px", opacity: 0.7 }}>
            共<span>2</span>件商品
          </p>
        </div>
      </Fragment>
    );
  }
}

export default connect((state) => {
  return state
})(CartHeader);
