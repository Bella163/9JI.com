import React, { Component } from "react";
import {connect} from 'react-redux';
import "../scss/DetailBanner.scss";

class DetailBanner extends Component {
    state = {
        imgUrl: []
    }
  render() {
    return (
      <div className="detail-banner">
        <div className="product-swipe relative" style={{ height: "349px" }}>
          <div className="mint-swipe">
            <div className="mint-swipe-items-wrap">
              <div className="mint-swipe-item">
                <div className="product-img-box pointer">
                  <img alt=""
                    src="https://img2.ch999img.com/pic/product/440x440/20190618233355267.jpg.webp"
                    className="lazy-img"
                  />
                </div>
              </div>
              <div className="mint-swipe-item">
                <div className="product-img-box pointer">
                  <img alt=""
                    src="https://img2.ch999img.com/pic/product/440x440/20190528163307399.jpg.webp"
                    className="lazy-img"
                  />
                </div>
              </div>
              <div className="mint-swipe-item">
                <div className="product-img-box pointer">
                  <img alt=""
                    src="https://img2.ch999img.com/pic/product/440x440/20190528163308395.jpg.webp"
                    className="lazy-img"
                  />
                </div>
              </div>
              <div className="mint-swipe-item">
                <div className="product-img-box pointer">
                  <img alt=""
                    src="https://img2.ch999img.com/pic/product/440x440/20190528163309392.jpg.webp"
                    className="lazy-img"
                  />
                </div>
              </div>
              <div className="mint-swipe-item">
                <div className="product-img-box pointer">
                  <img alt=""
                    src="https://img2.ch999img.com/pic/product/440x440/20190614231400177.jpg.webp"
                    className="lazy-img"
                  />
                </div>
              </div>
              <div className="mint-swipe-item">
                <div className="product-img-box pointer">
                  <img alt=""
                    src="https://img2.ch999img.com/pic/product/440x440/20190614231401174.jpg.webp"
                    className="lazy-img"
                  />
                </div>
              </div>
              <div className="mint-swipe-item is-active">
                <div className="product-img-box pointer">
                  <img alt=""
                    src="https://img2.ch999img.com/pic/product/440x440/20190614231402186.jpg.webp"
                    className="lazy-img"
                  />
                </div>
              </div>
              <div className="mint-swipe-item">
                <div className="product-img-box pointer">
                  <img alt=""
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    loading="true"
                    className="lazy-img"
                  />
                </div>
              </div>
              <div className="mint-swipe-item">
                <div className="product-img-box pointer">
                  <img alt=""
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    loading="true"
                    className="lazy-img"
                  />
                </div>
              </div>
            </div>
            <div className="mint-swipe-indicators" style={{ display: "none" }}>
              <div className="mint-swipe-indicator" />
              <div className="mint-swipe-indicator" />
              <div className="mint-swipe-indicator" />
              <div className="mint-swipe-indicator" />
              <div className="mint-swipe-indicator" />
              <div className="mint-swipe-indicator" />
              <div className="mint-swipe-indicator is-active" />
              <div className="mint-swipe-indicator" />
              <div className="mint-swipe-indicator" />
            </div>
          </div>
          <a href="javascript:;" className="btn-3d flex flex-align-center">
            <i className="icon-3d" /> <span>3D视图</span>
          </a>
        </div>
        <div
          className="flex padding-left padding-right white-bg flex-justify-between"
          style={{ paddingTop: "2px" }}
        >
          <div style={{ width: "54px" }} />
          <div className="flex flex-center">
            <div className="swipe-btn relative text-center btn-unselected">
              <img alt=""
                src="//img2.ch999img.com/m/static/assets/play-btn-bg.556d32dd8ed74af68a44ee79d2397bd3.png"
                alt=""
                className="play-btn-bg absolute"
              />
              <span className="play-btn-text relative font-10">图片</span>
            </div>
            <div className="swipe-btn relative text-center">
              <img alt=""
                src="//img2.ch999img.com/m/static/assets/play-btn-bg.556d32dd8ed74af68a44ee79d2397bd3.png"
                alt=""
                className="play-btn-bg absolute"
              />
              <span className="play-btn-text relative font-10">实拍</span>
            </div>
          </div>
          <div className="product-swipe-page">
            <span className="page-box">7/9</span>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(state => {
  return state;
})(DetailBanner);
