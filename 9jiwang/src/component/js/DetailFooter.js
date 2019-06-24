import React, { Component } from "react";
import { connect } from "react-redux";
import "../scss/DetailFooter.scss";

class DetailFooter extends Component {
  render() {
    return (
      <div className="btns-wrapper detail-footer">
        <div className="btns-box">
          <section className="flex">
            <div className="border-top flex">
              <a
                href="https://im.9ji.com/?ppid=77495"
                className="btn-small flex flex-col flex-justify-center flex-align-center"
              >
                <i className="small-icon kefu" />
                <span>客服</span>
              </a>
              <div className="btn-small flex flex-col flex-justify-center flex-align-center">
                <i className="small-icon star-o" />
                <span>收藏</span>
              </div>
              <a
                href="/trade/cart"
                className="btn-small flex flex-col flex-justify-center flex-align-center relative border-right"
              >
                <i className="small-icon cart" />
                <span>购物车</span>
              </a>
            </div>
            <div className="btn-big border-top flex-child-average">
              加入购物车
            </div>
            <div className="btn-big flex-child-average red">立即购买</div>
          </section>
        </div>
      </div>
    );
  }
}
export default connect(state => {
  return state;
})(DetailFooter);
