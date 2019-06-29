import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Detail from "./Detail";

class List extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "50px" }}>
        <Link
          to={{
            pathname: "/detail",
            search: "?ppid=68436"
          }}
        >
          点我呀呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕
          我
          <img
            alt=""
            src="https://img2.ch999img.com/pic/product/440x440/20190614231402186.jpg.webp"
            className="lazy-img"
          />
        </Link>
        <Route path="/detail" component={Detail} />
      </div>
    );
  }
}
export default withRouter(
  connect(state => {
    return state;
  })(List)
);
