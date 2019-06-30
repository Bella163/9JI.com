import React, { Component } from "react";
import { connect } from "react-redux";
import "../SCSS/ListProduct.scss";

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { list } = this.props;
    return (
      <div className="list style-0">
        {list.map(item => {
          return item.product.list.map(value => {
            return (
              <a
                href={`#/detail?ppid=${value.ppid}`}
                className="list-item"
                key={value.id}
              >
                <div className="item-left">
                  <img
                    alt=""
                    src={value.imagePath}
                    className="lazy-img product-img"
                  />
                </div>
                <div className="item-right">
                  <div className="flex flex-align-center mt-5">
                    <p className="lines-2 bold product-name">
                      {value.name}
                      {/* Apple iPhone XR 全网通版 黑色 64GB */}
                    </p>
                  </div>
                  <div className="product-tag mt-5">
                    <ul className="tag-list">
                      {value.tag.map(val => {
                        return (
                          <li className="tag-item" key={val}>
                            {val}
                          </li>
                        );
                      })}
                      {/* <li className="tag-item">双卡双待</li>
                    <li className="tag-item">六种配色</li>
                    <li className="tag-item">6.1英寸</li>
                    <li className="tag-item">LCD屏幕</li> */}
                    </ul>
                  </div>
                  <div className="flex flex-align-center mt-5 font-16">
                    <b className="red bold">
                      <span className="font-12">￥</span>
                      {value.price}
                    </b>
                  </div>

                  <div className="mt-5 grey-9 font-12">
                    <span>{value.commentCount}人评价</span>
                    <span className="ml-5">好评率{value.praiseRate}</span>
                  </div>

                  <span className="mt-5 font-12">
                    <span className="mr-5 bold">手机单品当日销量第2名</span>
                    <i
                      aria-hidden="true"
                      className="font-14 fa fa-angle-right grey-9"
                    />
                  </span>
                  <div className="link-box mt-5">
                    <span className="tag-link lines-1">一手优品 ￥4399</span>
                    <span className="tag-link lines-1">二手良品 ￥4199</span>
                  </div>
                </div>
              </a>
            );
          });
        })}
      </div>
    );
  }
}
export default connect(state => state)(ListProduct);
