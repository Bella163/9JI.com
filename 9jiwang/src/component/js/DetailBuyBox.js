import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "../scss/DetailBuyBox.scss";
import { CLOSE_BUY_BOX } from '../../store/visibility'

class DetailBuyBox extends Component {
    constructor(props) {
        super(props);
        this.closeBuyBox = this.closeBuyBox.bind(this)
        this.state = {

        }
    }
    closeBuyBox(){
        let showBuyBox = this.props.isShowDetailBuyBox;
        showBuyBox = false;
        let info = '加入购物车';
        this.props.dispatch({
            type: CLOSE_BUY_BOX,
            payload: {showBuyBox:false,info}
        })
        console.log('this.props.detailFooterInfo',this.props.detailFooterInfo)
    }
    
  render() {
    return (
      <div className="touch-wrap detail-buy-box" style={{display:this.props.isShowDetailBuyBox ? 'block' : 'none'}}>
        <div className="dialog-mask" style={{ zIndex: 20 }} />
        <div
          className="popup-layer-wrapper popup-layer"
          style={{
            zIndex: 20,
            height: 575,
            transition: "all 300ms ease 0s",
            transform: "translate3d(0px, 0px, 0px)"
          }}
        >
          <div className="popup-header">
            <div className="btn-popup-close fa fa-times" onClick={this.closeBuyBox} />
            <div className="buy-product-header border-bottom">
              <p className="buy-product-price red">
                <span>¥ 2399</span>
              </p>
              <p className="grey-9 font-12">商品编号：77515</p>
              <p
                className="grey-6 font-12"
                style={{
                  lineHeight: "1.33",
                  textAlign: "justify",
                  marginTop: 5
                }}
              >
                已选：碳纤黑 8GB+256GB
              </p>
              <div className="buy-img-box pointer white-bg">
                <img src="https://img2.ch999img.com/pic/product/160x160/20190528161430347.jpg" />
              </div>
            </div>
          </div>
          <div
            style={{ boxSizing: "border-box", height: 470, paddingBottom: 50 }}
          >
            <div
              className="popup-scroller buy-product-content"
              style={{ height: 470, paddingBottom: 50 }}
            >
              <div className="buy-product-module">
                <div className="buy-module-title">
                  <span className="sku-title">颜色</span>
                </div>
                <div className="buy-module-content flex flex-wrap">
                  <div className="svg-btn">
                    <div className="btn-buy btn-small active">碳纤黑</div>
                  </div>
                  <div className="svg-btn">
                    <div className="btn-buy btn-small">冰川蓝</div>
                  </div>
                  <div className="svg-btn">
                    <div className="btn-buy btn-small">火焰红</div>
                  </div>
                </div>
              </div>
              <div className="buy-product-module">
                <div className="buy-module-title">
                  <span className="sku-title">容量</span>
                </div>
                <div className="buy-module-content flex flex-wrap">
                  <div className="svg-btn">
                    <div className="btn-buy btn-small">6GB+64GB</div>
                  </div>
                  <div className="svg-btn">
                    <div className="btn-buy btn-small">6GB+128GB</div>
                  </div>
                  <div className="svg-btn">
                    <div className="btn-buy btn-small active">8GB+256GB</div>
                  </div>
                </div>
              </div>
              <div className="buy-product-module">
                <div className="buy-module-title">
                  <span className="sku-title">版本</span>
                </div>
                <div className="buy-module-content flex flex-wrap">
                  <div className="btn-buy btn-avge2 active">
                    红米 K20 全网通版
                  </div>
                  <div className="btn-buy btn-avge2">红米 K20 Pro 全网通版</div>
                </div>
              </div>
              <div className="buy-product-module">
                <div className="buy-module-title">
                  <span className="sku-title">套餐</span>
                </div>
                <div className="buy-module-content flex flex-wrap">
                  <div className="btn-buy btn-avge2 active">官方标配</div>
                  <div className="btn-buy btn-avge2">推荐套餐</div>
                </div>
              </div>
              <div className="buy-product-module">
                <div className="buy-module-title border-top">
                  <span className="sku-title">门店库存</span>
                </div>
                <div className="buy-module-content flex flex-wrap" />
              </div>
              <div className="buy-product-main-title border-top flex flex-justify-between">
                <span>九机服务</span>
                <a href="https://m.9ji.com/event/736.html" className="font-12">
                  <i aria-hidden="true" className="fa fa-question-circle-o" />
                  服务介绍
                </a>
              </div>
              <div className="buy-product-module">
                <div
                  className="buy-module-title ellipsis grey-9"
                  style={{ marginRight: 20 }}
                >
                  <img
                    src="https://img2.ch999img.com/newstatic/766/37d4d0a0cdfe72.png"
                    className="service-icon"
                  />
                  <span className="black">电池保</span>
                </div>
                <div className="buy-module-content flex flex-wrap">
                  <div
                    className="btn-buy btn-avge2 lines-1"
                    style={{ padding: 0 }}
                  >
                    电池保 2年 ¥49
                  </div>
                </div>
              </div>
              <div className="buy-product-module">
                <div
                  className="buy-module-title ellipsis grey-9"
                  style={{ marginRight: 20 }}
                >
                  <img
                    src="https://img2.ch999img.com/newstatic/771/37d4d40bebb64c.png"
                    className="service-icon"
                  />
                  <span className="black">碎屏保</span>
                </div>
                <div className="buy-module-content flex flex-wrap">
                  <div
                    className="btn-buy btn-avge2 lines-1"
                    style={{ padding: 0 }}
                  >
                    碎屏保 1年 ¥159
                  </div>
                  <div
                    className="btn-buy btn-avge2 lines-1"
                    style={{ padding: 0 }}
                  >
                    碎屏保 2年 ¥229
                  </div>
                </div>
              </div>
              <div className="buy-product-module">
                <div
                  className="buy-module-title ellipsis grey-9"
                  style={{ marginRight: 20 }}
                >
                  <img
                    src="https://img2.ch999img.com/newstatic/770/37d4d5e4d01efc.png"
                    className="service-icon"
                  />
                  <span className="black">延长保</span>
                </div>
                <div className="buy-module-content flex flex-wrap">
                  <div
                    className="btn-buy btn-avge2 lines-1"
                    style={{ padding: 0 }}
                  >
                    延长保 1年 ¥59
                  </div>
                  <div
                    className="btn-buy btn-avge2 lines-1"
                    style={{ padding: 0 }}
                  >
                    延长保 2年 ¥89
                  </div>
                </div>
              </div>
              <div className="buy-product-module">
                <div
                  className="buy-module-title ellipsis grey-9"
                  style={{ marginRight: 20 }}
                >
                  <img
                    src="https://img2.ch999img.com/newstatic/771/37d4d7704d69ce.png"
                    className="service-icon"
                  />
                  <span className="black">意外保</span>
                </div>
                <div className="buy-module-content flex flex-wrap">
                  <div
                    className="btn-buy btn-avge2 lines-1"
                    style={{ padding: 0 }}
                  >
                    意外保 1年 ¥199
                  </div>
                  <div
                    className="btn-buy btn-avge2 lines-1"
                    style={{ padding: 0 }}
                  >
                    意外保 2年 ¥249
                  </div>
                  <div
                    className="btn-buy btn-avge2 lines-1"
                    style={{ padding: 0 }}
                  >
                    意外保 半年 ¥109
                  </div>
                </div>
              </div>
              <div className="buy-module-count flex flex-justify-between flex-align-center border-top border-bottom">
                <div>数量</div>
                <div className="buy-module-content flex flex-wrap">
                  <div className="btn-tiny btn-minus disable">
                    <i aria-hidden="true" className="fa fa-minus" />
                  </div>
                  <span className="product-number">1</span>
                  <div className="btn-tiny btn-plus">
                    <i aria-hidden="true" className="fa fa-plus" />
                  </div>
                </div>
              </div>
              <div className="buy-product-module">
                <div className="buy-module-title">配置</div>
                <div className="buy-module-content mt-5">
                  <span className="buy-content-text">
                    充电器x1，数据线x1，保护壳x1（内置4000mAh电池）
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="popup-btns-row" style={{ height: 50 }}>
            <div className="sku-btn">
              <div className="btn">{this.props.detailFooterInfo}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => state
)(DetailBuyBox);
