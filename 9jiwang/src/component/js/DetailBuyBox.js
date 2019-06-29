import React, { Component } from "react";
import { connect } from "react-redux";
import "../scss/DetailBuyBox.scss";
import { CLOSE_BUY_BOX, ADD_TO_CART } from "../../store/visibility";

class DetailBuyBox extends Component {
  constructor(props) {
    super(props);

    this.closeBuyBox = this.closeBuyBox.bind(this);
    this.tabStorage = this.tabStorage.bind(this);
    this.tabColor = this.tabColor.bind(this);
    this.tabRelation = this.tabRelation.bind(this);
    this.tabSku = this.tabSku.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      colorActiveIdx: 0, //颜色高亮下标
      storageActiveIdx: 0, //容量高亮下标
      relationActiveIdx: 0, //版本高亮下标
      skuActiveIdx: 0, //套餐高亮下标
      colorText: this.props.list[0].sku[0].list[0].value,//初始化颜色数据
      storageText: this.props.list[0].sku[1].list[0].value,//初始化容量数据
      productId: this.props.list[0].ppid,//初始化商品编号
      goodCount: 1,//商品数量
    };
    
    this.methods();
    this.methods = this.methods.bind(this);
  }
  componentDidMount() {
    console.log("BuyBox-getPropsData:", this.props.list[0]);
  }
  methods(){
    this.aa = ()=>{

    }
  }
  tabColor(idx, val) {//切换颜色
    this.setState({
      colorText: val,
      colorActiveIdx: idx
    });
  }
  tabStorage(idx, val) {//切换容量
    this.setState({
      storageText: val,
      storageActiveIdx: idx
    });
  }
  tabRelation(idx, ppid) {//切换版本
    this.setState({
      productId: ppid,
      relationActiveIdx: idx
    });
  }
  tabSku(idx) {//切换套餐
    this.setState({
      skuActiveIdx: idx
    });
  }
  closeBuyBox() {
    let info = "加入购物车";
    this.props.dispatch({
      type: CLOSE_BUY_BOX,
      payload: { showBuyBox: false, info }
    });
  }
  reduceGood(num){
    let count = num;
    if(num > 1) {
      count--;
      this.setState({
        goodCount: count
      })
    } else {
      count = 1;
      this.setState ({
        goodCount: count
      })
    }
  }
  addGood(num){
    let count = num;
    if(num >= 3) {
      count = 3;
      this.setState ({
        goodCount: count
      })
      
    } else {
      count++;
      this.setState({
        goodCount: count
      })
    }
  }
  addToCart(){
    let imgUrl = this.props.list[0].imagePath;
    let title = `${this.props.list[0].productName}${this.state.storageText}${this.state.colorText}`;
    let count = this.state.goodCount;
    let price = this.props.list[0].price;
    let ppid = this.props.list[0].ppid;
    let obj = {
      imgUrl,
      title,
      count,
      price,
      ppid,
      isChecked: false
    }
    let cartList = this.props.renderlist;//复制仓库的购物车渲染列表
    cartList.unshift(obj);//往购物车渲染列表添加商品信息
    this.props.dispatch({//提交到仓库
      type: ADD_TO_CART,
      payload: cartList
    });
    sessionStorage.setItem('cartList',JSON.stringify(cartList));
    console.log()
    let data = JSON.parse(sessionStorage.getItem('cartList'))
    this.closeBuyBox();
    console.log('sessionStorage',data)
  }
  render() {
    let colors = this.props.list[0].sku[0].list; //颜色渲染数组
    let storage = this.props.list[0].sku[1].list; //容量渲染数组
    let relation = this.props.list[0].relation; // 版本渲染数组
    let allInfo = this.props.list; //详情页所有信息的数组

    return allInfo.map(val => {//渲染detailBuyBox所有内容
      return (
        <div
          className="touch-wrap detail-buy-box"
          key={val.productId}
          style={{ display: this.props.isShowDetailBuyBox ? "block" : "none" }}
        >
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
              <div
                className="btn-popup-close fa fa-times"
                onClick={this.closeBuyBox}
              />
              <div className="buy-product-header border-bottom">
                <p className="buy-product-price red">
                  <span>¥ {val.price}</span>
                </p>
                <p className="grey-9 font-12">
                  商品编号：{this.state.productId}
                </p>
                <p
                  className="grey-6 font-12"
                  style={{
                    lineHeight: "1.33",
                    textAlign: "justify",
                    marginTop: 5
                  }}
                >
                  已选：{this.state.colorText} {this.state.storageText}
                </p>
                <div className="buy-img-box pointer white-bg">
                  <img
                    src="https://img2.ch999img.com/pic/product/160x160/20190528161430347.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                boxSizing: "border-box",
                height: 470,
                paddingBottom: 50
              }}
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
                    {/* 渲染颜色类别 */}
                    {colors.map((item, index) => {
                      return (
                        <div className="svg-btn" key={item.ppid}>
                          <div
                            className={
                              this.state.colorActiveIdx === index
                                ? "btn-buy btn-small active"
                                : "btn-buy btn-small"
                            }
                            onClick={() => this.tabColor(index, item.value)}
                          >
                            {item.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="buy-product-module">
                  <div className="buy-module-title">
                    <span className="sku-title">容量</span>
                  </div>
                  <div className="buy-module-content flex flex-wrap">
                    {/* 渲染容量类别 */}
                    {storage.map((item, index) => {
                      return (
                        <div className="svg-btn" key={item.ppid}>
                          <div
                            className={
                              this.state.storageActiveIdx === index
                                ? "btn-buy btn-small active"
                                : "btn-buy btn-small"
                            }
                            onClick={() => this.tabStorage(index, item.value)}
                          >
                            {item.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="buy-product-module">
                  <div className="buy-module-title">
                    <span className="sku-title">版本</span>
                  </div>
                  <div className="buy-module-content flex flex-wrap">
                    {/* 渲染版本类别 */}
                    {relation.map((item, index) => {
                      return (
                        <div className="svg-btn" key={item.ppid}>
                          <div
                            className={
                              this.state.relationActiveIdx === index
                                ? "btn-buy btn-avge2 active"
                                : "btn-buy btn-small"
                            }
                            onClick={() => this.tabRelation(index, item.ppid)}
                          >
                            {item.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="buy-product-module">
                  <div className="buy-module-title">
                    <span className="sku-title">套餐</span>
                  </div>
                  <div className="buy-module-content flex flex-wrap">
                    {/* 渲染套餐类别 */}
                    {val.packagesList.map((packcon, idx) => {
                      return (
                        <div
                          key={packcon.id}
                          className={
                            this.state.skuActiveIdx === idx
                              ? "btn-buy btn-avge2 active"
                              : "btn-buy btn-avge2"
                          }
                          onClick={() => this.tabSku(idx)}
                        >
                          {packcon.name}
                        </div>
                      );
                    })}

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
                  <a
                    href="https://m.9ji.com/event/736.html"
                    className="font-12"
                  >
                    <i aria-hidden="true" className="fa fa-question-circle-o" />
                    服务介绍
                  </a>
                </div>
                {/* 渲染九机服务的  电池保、碎屏保等各种保 */}
                {val.jiujiService.map(service => {
                  return (
                    <div className="buy-product-module" key={service.productId}>
                      <div
                        className="buy-module-title ellipsis grey-9"
                        style={{ marginRight: 20 }}
                      >
                        <img
                          src={service.icon}
                          className="service-icon"
                          alt=""
                        />
                        <span className="black">{service.name}</span>
                      </div>
                      <div className="buy-module-content flex flex-wrap">
                        {/* 渲染 电池保、碎屏保 等 的具体保障内容 */}
                        {service.sku.map(sku => {
                          return (
                            <div key={sku.ppid}
                              className="btn-buy btn-avge2 lines-1"
                              style={{ padding: 0 }}
                            >
                              {sku.name} ￥{sku.price}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <div className="buy-module-count flex flex-justify-between flex-align-center border-top border-bottom"> 
                  <div>数量</div>
                  <div className="buy-module-content flex flex-wrap">
                    <div className={this.state.goodCount > 1 ? "btn-tiny btn-minus" : "btn-tiny btn-minus disable"} onClick={()=>this.reduceGood(this.state.goodCount)}>
                      <i aria-hidden="true" className="fa fa-minus" />
                    </div>
                    <span className="product-number">{this.state.goodCount}</span>
                    <div className="btn-tiny btn-plus" onClick={()=>this.addGood(this.state.goodCount)}>
                      <i aria-hidden="true" className="fa fa-plus" />
                    </div>
                  </div>
                </div>
                <div className="buy-product-module">
                  <div className="buy-module-title">配置</div>
                  <div className="buy-module-content mt-5">
                    <span className="buy-content-text">
                      {val.config}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="popup-btns-row" style={{ height: 50 }}>
              <div className="sku-btn">
                <div className="btn" onClick={this.addToCart}>{this.props.detailFooterInfo}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}
export default connect(state => state)(DetailBuyBox);
