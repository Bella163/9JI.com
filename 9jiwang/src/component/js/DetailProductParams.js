import React, { Component } from "react";
import { connect } from "react-redux";
import "../scss/DetailProductParams.scss";

class DetailProductParams extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
   
}
  render() {
    const { list } = this.props;
    let params = list[0].params;
    let guige = params.map(item => {
      return (
        <div className="spec-params-item flex flex-col flex-center" key={item.key}>
          <img src={item.imgPath} alt="" />
          <p className="key text">{item.key}</p>
          <p className="val text">{item.value}</p>
        </div>
      );
    });
    return (
      <div>
        <div className="spec-params-wrapper white-bg margin-top detail-params">
          <div className="module-box spec-params">
            <div className="module-header flex flex-justify-between flex-align-center">
              <div className="module-title flex flex-align-center small">
                <span>规格</span>
              </div>
              <div className="module-content flex flex-align-center">
                <div>
                  <div
                    className="spec-params-container"
                    style={{ width: 1118 }}
                  >
                      { guige }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default connect(state => state)(DetailProductParams);
