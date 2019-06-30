import React, { Component } from "./node_modules/react";
import "../SCSS/DetailHeader.scss";

class DetailHeader extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this)
    this.state = {

    }
  }
  goBack() {
    window.history.go(-1)
  }
  render() {
    return (
      <div
        className="detail-head flex flex-justify-between relative bb"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
      >
        <div className="left-side" onClick={this.goBack}>
          <a href="javascript:;"
            className="back-button flex flex-center"
            style={{ color: "rgb(51, 51, 51)", paddingLeft: "0px" }}
          >
            <i className="fa fa-angle-left font-30" />
            <span className="back-text font-16" />
          </a>
        </div>
        <div
          className="title flex flex-center"
          style={{ left: "44px", right: "44px" }}
        >
          <div className="detail-nav">
            <a href="javascript:;" className="active">
              商品
            </a>
            <a href="javascript:;" className="">
              评论
            </a>
            <a href="javascript:;" className="">
              详情
            </a>
          </div>
        </div>
        <div className="right-side flex flex-center">
          
          <a href="javascript:;"
            className="menu-btn flex flex-center grey-6"
            style={{ color: "rgb(51, 51, 51)" }}
          >
            <i className="fa fa-ellipsis-h font-24" />
          </a>
        </div>
        <div
          className="absolute full-width"
          style={{ top: "100%", zIndex: -1 }}
        />
      </div>
    );
  }
}
export default DetailHeader;
