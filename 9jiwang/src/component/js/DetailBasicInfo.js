import React, { Component } from "./node_modules/react";
import { connect } from "./node_modules/react-redux";
import "../SCSS/DetailBasicInfo.scss";

class DetailBasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let data = this.props.list;
    return (
      data.map(item => {
      return (
        <div className="detail-basic-info product-wrapper basic-info" key={item.productId}>
          <div>
            <p className="product-title">
              {/* "tags: (4) ["A11仿生", "IP67防水", "5.8英寸", "OLED屏幕"] */}
              <span className="bold">
                {item.productName}
                {item.skuName}
                {/* 红米 Redmi K20 Pro 全网通版 碳纤黑 8GB+128GB */}
              </span>
              {item.tags.map(val => {
                return (
                  <span className="bold" key={val}>
                    {val}
                  </span>
                );
              })}
              ;
              {/* <span className="bold">高通骁龙855</span> */}
            </p>

            <p className="product-profile red font-13">
              <span>
                {item.profile}
                {/* 【弹出全面屏】高通骁龙855，弹出式前置摄像头，4000mAh超长续航 */}
              </span>
            </p>
          </div>
          <div>
            <div className="product-price-box">
              <span>
                <em className="sign" style={{ fontSize: "16px" }}>
                  ￥
                </em>
                <em style={{ fontSize: "22px", marginLeft: "-5px" }}>
                  {item.price}
                  {/* 2799 */}
                </em>
              </span>
            </div>
          </div>
          <div className="mt-5 option-row flex flex-content-between">
            <a href="/product/price-trend/77495" className="btn-o">
              <i className="icon icon-trends" />
              价格走势
            </a>
            <span className="btn-o">
              <i className="icon icon-notice" />
              降价通知
            </span>
            <span className="btn-o">
              <i className="icon icon-pk" />
              机型对比
            </span>
            <span className="btn-o prevent">
              <i className="icon icon-open" />
              开箱展示
            </span>
          </div>
          <div />
        </div>
      );
    }))
  }
}
export default connect(state => {
  return state;
})(DetailBasicInfo);
