import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
// import { HashRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import DetailHeader from "../../component/js/DetailHeader";
import DetailBanner from "../../component/js/DetailBanner";
import DetailBasicInfo from "../../component/js/DetailBasicInfo";
import DetailFooter from "../../component/js/DetailFooter";
import DetailBuyBox from "../../component/js/DetailBuyBox";
import DetailProductParams from "../../component/js/DetailProductParams";
import DetailImages from "../../component/js/DetailImages";
import {
  STORE_AXIOS_DATA,
  SET_DETAIL_RENDERLIST
} from "../../store/visibility";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderlist: [],
      haveData: false
    };
  }
  componentDidMount() {
    this.getdata();
  }
  async getdata() {
    await axios
      .get(
        "https://www.easy-mock.com/mock/5d14225adf701769acf0f28b/example/9ji_detail#!method=get"
      )
      .then(res => {
        this.setState({
          haveData: false
        });
        console.log("getdata-axios数据", res.data);
        let storeData = JSON.parse(sessionStorage.getItem("detail"));
        //如果sessionStorage有数据，将sessionStorage的数据存到仓库
        if (storeData) {
          this.props.dispatch({
            type: STORE_AXIOS_DATA,
            payload: storeData
          });
        } else {
          //如果sessionStorage没有数据，将axios请求回来的数据存到仓库，并加这个数据存到sessionStorage
          this.props.dispatch({
            type: STORE_AXIOS_DATA,
            payload: res.data.data
          });
          sessionStorage.setItem("detail", JSON.stringify(res.data.data));
        }
      })
      .then(res => {
        this.getRenderList();
      });
  }
  getRenderList() {
    let storeData = JSON.parse(sessionStorage.getItem("detail"));
    if (storeData) {
      this.props.dispatch({
        //存值到仓库
        type: STORE_AXIOS_DATA,
        payload: storeData
      });
    }
    let ppid = this.props.location.search.slice(6); //获得url的参数68436，ppid的值
    let axiosData = this.props.axiosData; //从仓库获取所有axios请求回来的数据，数组形式
    // console.log('getRenderList-axiosData',axiosData)
    let renderlist = axiosData.filter(item => {
      //过滤出需要的数据数组
      return item.ppid == ppid;
    });
    // console.log('filter-renderlist',renderlist)
    this.props.dispatch({
      type: SET_DETAIL_RENDERLIST,
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
            <DetailHeader list={this.state.renderlist} />
            <DetailBanner list={this.state.renderlist} />
            <DetailBasicInfo list={this.state.renderlist} />
            <DetailBuyBox list={this.state.renderlist} />
            <DetailFooter list={this.state.renderlist} />
            <DetailProductParams list={this.state.renderlist} />
            <DetailImages list={this.state.renderlist} />
          </Fragment>
        ) : (
          "loading"
        )}
      </Fragment>
    );
  }
}
export default connect(state => state)(Detail);
