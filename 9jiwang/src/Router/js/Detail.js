import React, { Component, Fragment } from "react";
import fetchJSONP from "fetch-jsonp";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import DetailHeader from "../../component/js/DetailHeader";
import DetailBanner from "../../component/js/DetailBanner";
import DetailBasicInfo from "../../component/js/DetailBasicInfo";
import DetailFooter from "../../component/js/DetailFooter";
import DetailBuyBox from "../../component/js/DetailBuyBox";

class Detail extends Component {
  componentDidMount() {
    this.getdata();
  }
  // async getdata() {
  //   axios.get(
  //     "https://m.9ji.com/web/api/sc/products/getDetailStatic/v2?ppid=77515"
  //   ).then(res=>{
  //     console.log(res.data)
  //   }); }
  async getdata() {
    let promise = await fetchJSONP(
      "https://m.9ji.com/web/api/sc/products/getDetailStatic/v2?ppid=77515"
    );
    let dataS = promise.json();
    dataS.then(response => response.json())
    dataS.then(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <Fragment>
        <DetailHeader />
        <DetailBanner />
        <DetailBasicInfo />
        <DetailBuyBox />
        <DetailFooter />
      </Fragment>
    );
  }
}
export default Detail;
