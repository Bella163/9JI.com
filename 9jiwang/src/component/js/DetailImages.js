import React, { Component } from "react";
import { connect } from "react-redux";
import "../SCSS/DetailImages.scss";

class DetailImages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let pics = this.props.list[0].closeUpPic;
    return (
      <div className="overflow-hide detail-html detail-html-padding">
        <div>
          {pics.map(item => {
            return (
              <p style={{ textAlign: "center" }} key={item}>
                <img
                  alt=""
                  title=""
                  src={item}
                  style={{}}
                />
              </p>
            );
          })}

          <p>
            <br />
          </p>
        </div>
      </div>
    );
  }
}
export default connect(state => {
  return state;
})(DetailImages);
