import React, { Component, Fragment } from "react";
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

class Detail extends Component {
  render() {
    return (
      <Fragment>
        <DetailHeader />
        <DetailBanner />
        <DetailBasicInfo/>
        <DetailFooter/>
      </Fragment>
    );
  }
}
export default Detail;
