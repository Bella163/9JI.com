import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route,withRouter } from "react-router-dom";
import axios from "axios";
import {
  LIST_STORE_AXIOS_DATA,
  SET_LIST_RENDERLIST
} from "../../store/visibility";
import Detail from "./Detail";
import ListSticky from "../../component/JS/ListSticky";
import ListProduct from "../../component/JS/ListProduct";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderlist: [],
      haveData: true
    };
  }
  componentDidMount() {
    this.getdata();
  }
  async getdata() {
    await axios
      .get(
        "https://www.easy-mock.com/mock/5d14225adf701769acf0f28b/example/9ji_list#!method=get"
      )
      .then(res => {
        this.setState({
          haveData: false
        });
        console.log("getdata-axios数据", res.data);
        let storeData = JSON.parse(sessionStorage.getItem("list"));
        //如果sessionStorage有数据，将sessionStorage的数据存到仓库
        if (storeData) {
          this.props.dispatch({
            type: LIST_STORE_AXIOS_DATA,
            payload: storeData
          });
        } else {
          //如果sessionStorage没有数据，将axios请求回来的数据存到仓库，并加这个数据存到sessionStorage
          this.props.dispatch({
            type: LIST_STORE_AXIOS_DATA,
            payload: res.data.data
          });
          sessionStorage.setItem("list", JSON.stringify(res.data.data));
        }
      })
      .then(res => {
        this.getRenderList();
      });
  }
  urlToObj() {
    //将url参数转化为对象形式
    let urlParams = decodeURI(this.props.location.search.slice(1)); //获得name=华为&category=手机通讯
    let keywordArr = urlParams.split("&"); //['name=华为','category=手机通讯']
    let obj = {};
    for (let val of keywordArr) {
      let arr = val.split("=");
      for (let i = 0; i < arr.length; i++) {
        obj[arr[0]] = arr[1];
      }
    }
    // console.log('obj',obj)//{name: "苹果", category: "手机通讯"}
    return obj;
  }
  getRenderList() {
    let storeData = JSON.parse(sessionStorage.getItem("list"));
    if (storeData) {
      this.props.dispatch({
        //存值到仓库
        type: LIST_STORE_AXIOS_DATA,
        payload: storeData
      });
    }
    let params = this.urlToObj(); //获取url传来的参数
    let listAxiosData = this.props.listAxiosData; //从仓库获取所有axios请求回来的数据，对象形式
    let { apple, asus, mobile_accessories, phone, router } = listAxiosData;
    let newArr = [apple, asus, mobile_accessories, phone, router]; //将listAxiosData对象解构并添加入数组
    let renderlist = newArr.filter(val => {
      if (val.cate[0].name === params.category) {
        let renlist = val.product.list.filter(item => {
          return item.cate.indexOf(params.name) !== -1;
        });
        return renlist.length > 0;
      }
    });

    console.log("renlist", renderlist);
    this.props.dispatch({
      type: SET_LIST_RENDERLIST,
      payload: renderlist
    });
    this.setState({
      renderlist: renderlist,
      haveData: true
    });
  }
  render() {
    return (
      <Fragment>
        {this.state.haveData ? (
          <Fragment>
            <ListSticky list={this.state.renderlist} />
            <ListProduct list={this.state.renderlist} />
            <div style={{ width: "100%", height: "50px" }}>
              <Route path="/detail" component={Detail} />
            </div>
          </Fragment>
        ) : (
          "loading"
        )}
      </Fragment>
    );
  }
}
export default withRouter(
  connect(state => {
    return state;
  })(List)
);
