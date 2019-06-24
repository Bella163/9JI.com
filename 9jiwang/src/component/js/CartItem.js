import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import "../scss/CartItem.scss";

class CartItem extends Component {
  render() {
    return (
      <div className="cart">
        <div className="cart-item white-bg">
          <div className="product">
            <Router>
            <Link to="/product/77495.html" className="product-item block">
              <div className="flex flex-between relative">
                <span
                  className="checkbox product-checkbox checked"
                />
                <div className="product-img flex-child-noshrink">
                  <img
                    src="https://img2.ch999img.com/pic/product/440x440/20190618233355267.jpg"
                    className="full-width full-height"
                  />
                </div>
                <div className="product-info margin-left flex flex-col flex-justify-between flex-child-grow">
                  <p className="lines-2 product-name">
                    红米 Redmi K20 Pro 全网通版 碳纤黑 8GB+128GB
                  </p>

                  <div className="flex flex-justify-between flex-align-center">
                    <div>
                      <p>
                        <span className="red">￥2799</span>
                      </p>
                    </div>
                    <div className="edit-count flex">
                      <span className="min-count disable">-</span>
                      <span>1</span>
                      <span className="max-count">+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-bind">
                <div className="service-btn flex">
                  <p className="flex flex-center">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAvxJREFUWAntV01oE0EUnre7qUh2c1BaPHRLITlZRFA8WrBQqIge9CQtxJsIXgpFTyJ4UFpET4p4izcVKnpW24M1IORm9SJpuwliEaymP5aY7PgNNmYzO7ud1HjSgSXz/r73zZvfMPavN9pJAdb6+/exen2Ucz7GGcsQUZ44zyUZm6Zy+Xs7mNoEeCaza61aPcl9/xyCRpDYDCUiqoDMI9hyKc97FbIrFNsSWHfdIz5jWYCeZZzvUWCoVUQfAJ6zEokHu4tFT+3EWCSBVde9gKCLKPP+qGAdPRKAO3tJhnHD9rwXcoySQMV1b2G047Lzn8hI5HOi06lS6WkQxwgKgX420O9IF2UwsFDHZDA1gXbmWkaMl/fKZjUB2esvyh0ngG34Dt9zXc4dJSDOADudPuiUSsNYdDM6JLQJAHwToNP4PquAt5KP0uxsjQ8MdGHFuyo/WadNAIHXnXL5DCUSB5DsfRBITr5aqTzGNs4EfaL62gSwjdICxF5YWCbLOtYgEZH8VFRCWa9NACPKVnp7LwVJGIYxhTn/XfatkWsnF1iY0nBDIgw4sl1OlctTQauYc53kYmFiGoeCsfoVaEZNNiohVLrJm+GtPatV/CWBaR0lCF+3TedJ3BfdlmE8wcivYHpGmqaYHlFNtqorQLQsO4Zkzidq9fqcdnIA4GYN4aoJcP46lLADCuyYEK6agGne7UC+VgiiFZvzh61KXJGyQsjO0tIMI3qmsu1UZxBdw3vxixyvJCCcuojGo45dGURDzie7u++o/JTnQMNxva/vcN33xaXiNHTt/mLe39pEg+R5K6rYyAoI56TnFZhhHAdIaPWqwEI6ojdkmsNRyYV/LAHhgOf1HJwOoZsXsm5Dae87qdRRe3HxU1zMtgREcLJU+uhkMoNYSBMQ1+MAsXgXTdM8gSP3PM3PV2N9YYxdA6rgjXTa9avVqzhUxH+F5klK9BVgN+2enttUKGyoYlW6tgk0QDZdN/2DMfF0H8LjI+dY1j0qFr817P9/dSvwEy6d+6dhTLlIAAAAAElFTkSuQmCC" />
                    <span>选服务</span>
                    <i className="fa fa-angle-right grey-9 ml-5 font-18" />
                  </p>
                </div>

                <div className="bind-item" />
                <div className="bind-item" />
              </div>
            </Link>
            </Router>
          </div>
        </div>
        <div className="cart-item white-bg">
          <div className="product">
            <Router>
            <Link to="/product/61887.html" className="product-item block">
              <div className="flex flex-between relative">
                <span
                  className="checkbox product-checkbox"
                  style={{ borderColor: "rgb(204, 204, 204)" }}
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
                    <div className="edit-count flex">
                      <span className="min-count disable">
                        -
                      </span>
                      <span>1</span>
                      <span className="max-count">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-bind">
                <div className="bind-item" />
                <div className="bind-item" />
              </div>
            </Link>
          </Router>
          </div>
        </div>
        <div className="cart-item white-bg">
          <div className="group-title flex flex-align-center flex-justify-between border-bottom">
            <div className="flex flex-center font-12">
              <span
                className="checkbox margin-right flex-child-noshrink"
                style={{ borderColor: "rgb(204, 204, 204)" }}
              />
              <span className="group-tag flex-child-noshrink">组合购</span>
              <span>
                推荐套餐
                <a
                  href=""
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
            <Router>
            <Link
              to="/product/61887.html"
              className="product-item block border-bottom"
            >
              <div className="flex flex-between relative">
                <span
                  className="checkbox product-checkbox"
                  style={{ borderColor: "rgb(204, 204, 204)" }}
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
            </Link>
            <Link to="/product/72715.html" className="product-item block">
              <div className="flex flex-between relative">
                <span
                  className="checkbox product-checkbox"
                  style={{ borderColor: "rgb(204, 204, 204)" }}
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
            </Link>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(state => {
  return state;
})(CartItem);
