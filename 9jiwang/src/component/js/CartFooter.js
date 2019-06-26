import React, { Component } from "react";
import { connect } from "react-redux";
import "../scss/CartFooter.scss";
import {
  CHECK_ALL,
  TOTAL_MONEY,
  CHECK_ONE,
  REMOVE_GOOD
} from "../../store/visibility";

class CartFooter extends Component {
  constructor(props) {
    super(props);
    this.allCheck = this.allCheck.bind(this);
    this.removeGood = this.removeGood.bind(this);
    this.state = {
      list: []
    };
  }
  allCheck() {//全选逻辑
    let allcheck = this.props.isAllChecked;
    //将全选状态置反
    allcheck = !allcheck;
    let list = this.props.renderlist.splice(0); //复制renderlist数组
    let len = 0;
    if (allcheck) {//全选为true，将所有isChecked变为true
      for (let i = 0; i < list.length; i++) {
        list[i].isChecked = true;
        len += list[i].count;
      }
      allcheck = true;
      
    } else {//全选为false，将所有isChecked变为false
      for (let i = 0; i < list.length; i++) {
        list[i].isChecked = false;
      }
      allcheck = false;
      len = 0;
    }
    //将数据提交给reduecer
    this.props.dispatch({
      type: CHECK_ONE,
      payload: { list, len }
    });
    this.props.dispatch({
      type: CHECK_ALL,
      payload: { allcheck, len }
    });
    //全选/全不选后，重新计算价格
    this.total(list);
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

  removeGood() {
    let list = this.props.renderlist.splice(0);
    let renlist = list.filter(item => {
      return item.isChecked == false;
    });
    this.props.dispatch({
      type: REMOVE_GOOD,
      payload: renlist
    });
    this.total(renlist)
  }
  componentWillMount() {
    const { renderlist } = this.props;
    this.setState({
      list: renderlist
    });
  }
  render() {
    const cal = (
      <a
        href="javascript:"
        className="settlement white flex-child-noshrink margin-left main-bgcolor"
      >
        {" "}
        去结算{" "}
      </a>
    );
    const del = (
      <a
        href="javascript:"
        className="settlement main-bgcolor white flex-child-noshrink"
        onClick={this.removeGood}
      >
        删除所选
      </a>
    );
    return (
      <div className="cart-total">
        <div className="wrapper flex flex-justify-between flex-align-center">
          <div className="flex flex-center margin-left flex-child-noshrink">
            <span
              className={
                this.props.isAllChecked ? "checkbox checked" : "checkbox"
              }
              onClick={this.allCheck}
              style={{ borderColor: "rgb(204, 204, 204)" }}
            />
            <span style={{ marginLeft: "5px" }}>全选</span>
          </div>
          <div className="total-price flex flex-col flex-justify-center flex-align-end flex-child-average margin-right">
            {this.props.isShowCartTotal ? (
              <p>
                合计 ：
                <span className="red">￥{this.props.cartTotalMoney}</span>
              </p>
            ) : (
              ""
            )}
            <p className="grey-9">共{this.props.cartTotalCount}件商品</p>
          </div>
          {/* {this.props.isShowCartTotal ? (<a href="javascript:" className="settlement white flex-child-noshrink margin-left main-bgcolor"> 去结算 </a> ) : (<a href="javascript:" className="settlement main-bgcolor white flex-child-noshrink" onClick={() => {this.removeGood;}}>删除所选</a>
          )} */}
          {this.props.isShowCartTotal ? cal : del}
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return state;
})(CartFooter);
