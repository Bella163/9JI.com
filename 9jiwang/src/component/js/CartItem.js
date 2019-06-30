import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// import { HashRouter as Router, Route, Link } from "react-router-dom";
import "../SCSS/CartItem.scss";
import {
  REDUCE_GOOD,
  ADD_GOOD,
  CHECK_ONE,
  CHECK_ALL,
  TOTAL_MONEY,
  HAVE_GOOD
} from "../../store/visibility";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMoney: 0, //购物车总价
      isAllChecked: false, //全选框是否选中状态
      list: [],
      haveGoods: false
    };
  }

  componentDidMount() {
    this.haveProduct();
  }
  reduceGood(num, index) {
    if (num > 1) {
      num--;
      let list = this.props.renderlist.splice(0); //复制数组
      console.log("count", list);
      list[index].count = num;
      this.props.dispatch({
        type: REDUCE_GOOD,
        payload: list
      });
      this.total(list);
      // console.log(this.state.totalMoney);
    }
  }
  addGood(num, index) {
    num++;
    let list = this.props.renderlist.splice(0); //复制数组
    list[index].count = num;
    this.props.dispatch({
      type: ADD_GOOD,
      payload: list
    });
    this.total(list);
    console.log(this.props.cartTotalMoney);
  }
  total(list) {
    let Money = 0;
    let len = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].isChecked) {
        //如果isChecked为true，即选中状态，+= 这条商品的 单价*数量
        Money += list[i].price * list[i].count;
        len += list[i].count;
      }
      this.props.dispatch({
        type: TOTAL_MONEY,
        payload: { Money, len }
      });
      console.log(this.props.cartTotalMoney);
    }
  }
  checkOne(check, index) {
    check = !check; //isChecked的值取反
    let list = this.props.renderlist.splice(0);
    list[index].isChecked = check; //修改对应的商品的isChecked
    let len = 0;
    list.forEach(item => {
      if (item.isChecked) {
        len += item.count;
      }
    });
    this.props.dispatch({
      type: CHECK_ONE,
      payload: { list, len }
    });
    let res = list.every(item => {
      return item.isChecked === true;
    });
    if (res) {
      //每一个 isChecked 都为 true 的时候,即全部选中，设置 isAllChecked 为true
      let allcheck = true;
      list.forEach(item => {
        if (item.isChecked) {
          len += item.count;
        }
      });
      this.props.dispatch({
        type: CHECK_ALL,
        payload: { allcheck, len }
      });
    } else {
      //list中的 isChecked 有false 的时候，即未全部选中，设置 isAllChecked 为false
      len = 0;
      let allcheck = false;
      list.forEach(item => {
        if (item.isChecked) {
          len += item.count;
        }
      });
      this.props.dispatch({
        type: CHECK_ALL,
        payload: { allcheck, len }
      });
    }
    this.total(list);
  }
  haveProduct() {
    let len = this.props.renderlist.length;
    if (len > 0) {
      this.props.dispatch({
        type: HAVE_GOOD,
        payload: true
      });
    } else {
      this.props.dispatch({
        type: HAVE_GOOD,
        payload: false
      });
    }
  }
  render() {
    let _this = this;
    let { renderlist } = this.props;
    // console.log(renderlist);
    return (
      <Fragment>
        {this.props.haveGoods ? (//判断购物车有无商品的状态，显示相应内容
          <div className="cart">
            {renderlist.map(function(item, index) {
              //,this指向undefined。将map改成箭头函数;或在map(function(item,index){}.bind(this)) ,function后加 bind(this)。不是直接在点击事件的函数后直接加 bind(this) ,在map渲染数组的 function 加bind(this)
              // console.log('this',this)
              return (
                <div className="cart-item white-bg" key={index}>
                  <div className="product">
                    <div className="product-item block">
                      <div className="flex flex-between relative">
                        <span
                          className={
                            item.isChecked
                              ? "checkbox product-checkbox checked"
                              : "checkbox product-checkbox"
                          }
                          onClick={() => {
                            _this.checkOne(item.isChecked, index);
                          }}
                        />
                        <div className="product-img flex-child-noshrink">
                          <img
                            alt=""
                            src={item.imgUrl}
                            className="full-width full-height"
                          />
                        </div>
                        <div className="product-info margin-left flex flex-col flex-justify-between flex-child-grow">
                          <p className="lines-2 product-name">{item.title}</p>

                          <div className="flex flex-justify-between flex-align-center">
                            <div>
                              <p>
                                <span className="red">￥{item.price}</span>
                              </p>
                            </div>
                            <div className="edit-count flex">
                              <span
                                className={
                                  item.count > 1
                                    ? "min-count"
                                    : "min-count disable"
                                }
                                onClick={() =>
                                  _this.reduceGood(item.count, index)
                                }
                              >
                                -
                              </span>
                              <span>{item.count}</span>
                              <span
                                className="max-count"
                                onClick={() => {
                                  _this.addGood(item.count, index);
                                }}
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="product-bind"
                        style={{ display: item.serve ? "block" : "none" }}
                      >
                        <div className="service-btn flex">
                          <p className="flex flex-center">
                            <img
                              alt=""
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAvxJREFUWAntV01oE0EUnre7qUh2c1BaPHRLITlZRFA8WrBQqIge9CQtxJsIXgpFTyJ4UFpET4p4izcVKnpW24M1IORm9SJpuwliEaymP5aY7PgNNmYzO7ud1HjSgSXz/r73zZvfMPavN9pJAdb6+/exen2Ucz7GGcsQUZ44zyUZm6Zy+Xs7mNoEeCaza61aPcl9/xyCRpDYDCUiqoDMI9hyKc97FbIrFNsSWHfdIz5jWYCeZZzvUWCoVUQfAJ6zEokHu4tFT+3EWCSBVde9gKCLKPP+qGAdPRKAO3tJhnHD9rwXcoySQMV1b2G047Lzn8hI5HOi06lS6WkQxwgKgX420O9IF2UwsFDHZDA1gXbmWkaMl/fKZjUB2esvyh0ngG34Dt9zXc4dJSDOADudPuiUSsNYdDM6JLQJAHwToNP4PquAt5KP0uxsjQ8MdGHFuyo/WadNAIHXnXL5DCUSB5DsfRBITr5aqTzGNs4EfaL62gSwjdICxF5YWCbLOtYgEZH8VFRCWa9NACPKVnp7LwVJGIYxhTn/XfatkWsnF1iY0nBDIgw4sl1OlctTQauYc53kYmFiGoeCsfoVaEZNNiohVLrJm+GtPatV/CWBaR0lCF+3TedJ3BfdlmE8wcivYHpGmqaYHlFNtqorQLQsO4Zkzidq9fqcdnIA4GYN4aoJcP46lLADCuyYEK6agGne7UC+VgiiFZvzh61KXJGyQsjO0tIMI3qmsu1UZxBdw3vxixyvJCCcuojGo45dGURDzie7u++o/JTnQMNxva/vcN33xaXiNHTt/mLe39pEg+R5K6rYyAoI56TnFZhhHAdIaPWqwEI6ojdkmsNRyYV/LAHhgOf1HJwOoZsXsm5Dae87qdRRe3HxU1zMtgREcLJU+uhkMoNYSBMQ1+MAsXgXTdM8gSP3PM3PV2N9YYxdA6rgjXTa9avVqzhUxH+F5klK9BVgN+2enttUKGyoYlW6tgk0QDZdN/2DMfF0H8LjI+dY1j0qFr817P9/dSvwEy6d+6dhTLlIAAAAAElFTkSuQmCC"
                            />
                            <span>{item.serve ? item.serve : ""}</span>
                            <i className="fa fa-angle-right grey-9 ml-5 font-18" />
                          </p>
                        </div>

                        <div className="bind-item" />
                        <div className="bind-item" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="nothing relative flex flex-col flex-center">
            <i /> <p className="grey-9">购物车里什么都没有，快去买点什么吧~</p>{" "}
            <a href="/" className="router-link-active">
              去逛逛
            </a>
          </div>
        )}
      </Fragment>
    );
  }
}
export default connect(state => {
  return state;
})(CartItem);
