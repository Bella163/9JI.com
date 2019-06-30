import React, { Component } from "react";
import { connect } from "react-redux";
import "../SCSS/DetailFooter.scss";
import { CLOSE_BUY_BOX } from "../../store/visibility";

class DetailFooter extends Component {
  constructor(props) {
    super(props);
    this.openBuyBox = this.openBuyBox.bind(this);
    this.state = {};
  }
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
                href="#/cart"
                className="btn-small flex flex-col flex-justify-center flex-align-center relative border-right"
              >
                <i className="small-icon cart" />
                <span>购物车</span>
              </a>
            </div>
            <div
              className="btn-big border-top flex-child-average"
              onClick={() => this.openBuyBox("加入购物车")}
            >
              加入购物车
            </div>
            <div
              className="btn-big flex-child-average red"
              onClick={() => this.openBuyBox("立即购买")}
            >
              立即购买
            </div>
          </section>
        </div>
      </div>
    );
  }
  openBuyBox(str) {
    let showBuyBox = this.props.isShowDetailBuyBox;
    showBuyBox = true;
    let info = str;
    console.log("info", info);
    this.props.dispatch({
      type: CLOSE_BUY_BOX,
      payload: { showBuyBox, info }
    });
  }
}

export default connect(state => {
  return state;
})(DetailFooter);
