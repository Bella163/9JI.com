import React, { Component } from "react";
import { connect } from "react-redux";
import "../scss/CartItem.scss";

class CartItem extends Component {
  render() {
    return (
      <div className="cart-item white-bg">
        <div className="group-title flex flex-align-center flex-justify-between border-bottom">
          <div className="flex flex-center font-12">
            <span
              className="checkbox margin-right flex-child-noshrink checked"
              style={{
                background: "rgb(242, 28, 28)",
                borderColor: "rgb(242, 28, 28)"
              }}
            />
            <span className="group-tag flex-child-noshrink">组合购</span>
            <span>
              推荐套餐
              <a
                href="javascript:;"
                className="group-link flex-child-noshrink inline-block"
              />
            </span>
          </div>
          <p className="flex-child-noshrink">
            <span className="flex-child-noshrink red">￥5618</span>
            <span className="font-12 grey-9">省￥9</span>
          </p>
        </div>
        <div className="product">
          <a
            href="/product/61887.html"
            className="product-item block border-bottom"
          >
            <div className="flex flex-between relative">
              <span
                className="checkbox product-checkbox checked"
                style={{
                  background: "rgb(242, 28, 28)",
                  borderColor: "rgb(242, 28, 28)"
                }}
              />
              <div className="product-img flex-child-noshrink">
                <img
                  src="https://img2.ch999img.com/pic/product/440x440/20190613093300208.jpg"
                  className="full-width full-height"
                />
              </div>
              <div className="product-info margin-left flex flex-col flex-justify-between flex-child-grow">
                <p className="lines-2 product-name">
                  华为 MateBook D 2018款 15.6英寸 银色 i5主频1.6GHz 8G 1T+128G
                  MX150 2G
                </p>

                <div className="flex flex-justify-between flex-align-center">
                  <div>
                    <p>
                      <span className="red">￥5488</span>
                    </p>
                  </div>

                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="product-bind">
              <div className="bind-item" />
              <div className="bind-item" />
            </div>
          </a>
          <a href="/product/72715.html" className="product-item block">
            <div className="flex flex-between relative">
              <span
                className="checkbox product-checkbox checked"
                style={{
                  background: "rgb(242, 28, 28)",
                  borderColor: "rgb(242, 28, 28)"
                }}
              />
              <div className="product-img flex-child-noshrink">
                <img
                  src="https://img2.ch999img.com/pic/product/440x440/20181203184705900.jpg"
                  className="full-width full-height"
                />
              </div>
              <div className="product-info margin-left flex flex-col flex-justify-between flex-child-grow">
                <p className="lines-2 product-name">
                  触宝 华为笔记本 钢化膜 Matebook D
                </p>

                <div className="flex flex-justify-between flex-align-center">
                  <div>
                    <p>
                      <span className="red">￥130</span>
                      <span className="font-12 grey-9 ml-5 line-through">
                        ￥139
                      </span>
                    </p>
                  </div>

                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="product-bind">
              <div className="bind-item" />
              <div className="bind-item" />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default connect((state) => {
  return state
})(CartItem);
