import React, { Component } from "react";
import { connect } from "react-redux";

import "../scss/CartRecommend.scss";

class CartRecommend extends Component {
  render() {
    return (
      <div className="recommend">
        <div className="title-image">
          <img alt=""
            src="https://img2.ch999img.com/newstatic/767/3174479e1a14d5.png"
            className="full-width"
          />
        </div>
        <ul className="flex flex-justify-between flex-wrap">
          <li>
            <div className="recommend-item">
              <a href="/product/72715.html">
                <img alt="" src="https://img2.ch999img.com/pic/product/440x440/20181203184705900.jpg" />
              </a>
              <p className="lines-2 mt-5 recommend-name">
                触宝 华为笔记本 钢化膜
              </p>
              <div className="flex flex-justify-between flex-align-center margin-top">
                <span className="red font-16">￥139</span>
                <span>
                  <i className="icon-cart" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="recommend-item">
              <a href="/product/71911.html">
                <img alt="" src="https://img2.ch999img.com/pic/product/440x440/20181030185912817.jpg" />
              </a>
              <p className="lines-2 mt-5 recommend-name">华为 双肩背包</p>
              <div className="flex flex-justify-between flex-align-center margin-top">
                <span className="red font-16">￥199</span>
                <span>
                  <i className="icon-cart" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="recommend-item">
              <a href="/product/46557.html">
                <img alt="" src="https://img2.ch999img.com/pic/product/440x440/20170517164638488.jpg" />
              </a>
              <p className="lines-2 mt-5 recommend-name">
                圣贝尔 836 笔记本电脑包
              </p>
              <div className="flex flex-justify-between flex-align-center margin-top">
                <span className="red font-16">￥85</span>
                <span>
                  <i className="icon-cart" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="recommend-item">
              <a href="/product/62586.html">
                <img alt="" src="https://img2.ch999img.com/pic/product/440x440/20180307123418336.jpg" />
              </a>
              <p className="lines-2 mt-5 recommend-name">
                华为 原装蓝牙4.0鼠标
              </p>
              <div className="flex flex-justify-between flex-align-center margin-top">
                <span className="red font-16">￥149</span>
                <span>
                  <i className="icon-cart" />
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="recommend-item">
              <a href="/product/75385.html">
                <img alt="" src="https://img2.ch999img.com/pic/product/440x440/20190429143651856.jpg" />
              </a>
              <p className="lines-2 mt-5 recommend-name">
                华为 原装 12000mAh 40W 超级快充移动电源
              </p>
              <div className="flex flex-justify-between flex-align-center margin-top">
                <span className="red font-16">￥369</span>
                <span>
                  <i className="icon-cart" />
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default connect(state => {
  return state;
})(CartRecommend);
