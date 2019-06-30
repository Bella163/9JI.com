import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "../SCSS/ListSticky.scss";
import { SET_LIST_RENDERLIST } from "../../store/visibility";

class ListSticky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: ["综合", "价格", "最新上架"],
      arr: ["品牌", "运行内存", "机身内存", "屏幕尺寸范围"],
      activeIdx: 0,
      priceState: true //true：降序，false：升序
    };
  }
  handleTab(index) {
    let activeIdx = this.state.activeIdx;
    activeIdx = index
    this.setState({
      activeIdx
    });
    console.log(this.state.activeIdx)
    this.sortList();
  }
  sortList(){
    let activeIdx = this.state.activeIdx;
    let [
      {
        product: { list }
      }
    ] = this.props.list;
    let renderlist = list;
    
    if (activeIdx === 0) {

      renderlist.sort(function(a, b) {//按 productId 升序
        return a.productId - b.productId;
      });
      console.log(renderlist)
      this.props.dispatch({
        type: SET_LIST_RENDERLIST,
        payload: renderlist
      });
    }
    else if (activeIdx === 1) {
      let priceState = this.state.priceState;
      if (priceState) {
        renderlist.sort(function(a, b) {//按 price 升序
          return a.price - b.price;
        });
        priceState = !priceState;
        console.log(renderlist)
        this.props.dispatch({
          type: SET_LIST_RENDERLIST,
          payload: renderlist
        });
      } else {
        renderlist.sort(function(a, b) {//按 price 降序
          return b.price - a.price;
        });
        priceState = !priceState;
      }
      this.setState({
        priceState
      });
    }
    else if (activeIdx === 2) {
      renderlist.sort(function(a, b) {//按 commentCount 升序
        return a.commentCount - b.commentCount;
      });
    }
    console.log("sticky-list",activeIdx, renderlist);
    // this.props.dispatch({
    //   type: SET_LIST_RENDERLIST,
    //   payload: renderlist
    // });
  }
  methods(index){
    this.handleTab(index);
    // this.sortList();
  }
  render() {
    return (
      <div className="sort sticky">
        <div className="sort-bar flex flex-justify-between flex-align-center">
          {this.state.range.map((item, index) => {
            return (
              <div className="sort-item flex-child-average" key={item}>
                <div className="sort-item-text flex flex-center">
                  <span
                    className={
                      index === this.state.activeIdx ? "main-color bold" : ""
                    }
                    onClick={() => this.methods(index)}
                  >
                    {item}
                  </span>
                  <div className="sort-direction flex flex-col flex-center ml-5">
                    {index === 0 ? (
                      <i className="sort-icon fa fa-caret-down ml-5 font-12 main-color" />
                    ) : (
                      ""
                    )}
                    {index === 1 ? (
                      <Fragment>
                        <i className="sort-up fa fa-sort-up font-12" />
                        <i className="fa fa-sort-down font-12" />
                      </Fragment>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="sort-item flex flex-center flex-child-average">
            <p>筛选</p>
          </div>
        </div>
        <div className="fast-sort flex">
          {this.state.arr.map(item => {
            return (
              <div className="fast-sort-item" key={item}>
                <div className="fast-sort-item-label flex flex-center">
                  <span className="screening-title-name lines-1">{item}</span>
                  <i className="sort-icon fa fa-caret-down ml-5 flex-child-noshrink" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default connect(state => state)(ListSticky);
