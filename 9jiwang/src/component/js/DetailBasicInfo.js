import React, { Component } from "react";
import {connect} from 'react-redux';
import "../scss/DetailBasicInfo.scss";

class DetailBasicInfo extends Component {
  render() {
    return (
      <div className="detail-basic-info product-wrapper basic-info">
        <div>
          <p className="product-title">
            <span className="bold">
              红米 Redmi K20 Pro 全网通版 碳纤黑 8GB+128GB
            </span>
            <span className="bold">高通骁龙855</span>
            <span className="bold">弹出式前置摄像头</span>
            <span className="bold">4000mAh超出续航</span>
          </p>

          <p className="product-profile red font-13">
            <span>
              【弹出全面屏】高通骁龙855，弹出式前置摄像头，4000mAh超长续航
            </span>
          </p>
        </div>
        <div>
          <div className="product-price-box">
            <span>
              <em className="sign" style={{ fontSize: "16px" }}>
                ￥
              </em>
              <em style={{ fontSize: "22px", marginLeft: "-5px" }}>2799</em>
            </span>
          </div>
        </div>
        <div className="mt-5 option-row flex flex-content-between">
          <a href="/product/price-trend/77495" className="btn-o">
            <i className="icon icon-trends" />价格走势
          </a>
          <a href="javascript:;" className="btn-o">
            <i className="icon icon-notice" />降价通知
          </a>
          <a href="javascript:;" className="btn-o">
            <i className="icon icon-pk" />机型对比
          </a>
          <a href="javascript:" className="btn-o prevent">
            <i className="icon icon-open" />开箱展示
          </a>
        </div>
        <div />
      </div>
    );
  }
}
export default connect(state => {
  return state;
})(DetailBasicInfo);
