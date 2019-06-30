import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Detail from './Detail';
import Cart from './Cart';
import List from './List';
import Sort from './Sort';

class IRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/detail" component={Detail} />
          <Route path="/list" component={List} />
          <Route path="/cart" component={Cart} />
          <Route path="/sort" component={Sort} />
          {/* <Route path="/cart" component={Cart} /> */}
        </Switch>
      </Router>
    );
  }
}
export default connect(state => {
  return state;
})(IRouter);
