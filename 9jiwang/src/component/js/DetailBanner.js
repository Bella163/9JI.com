import React, { Component, Fragment } from "./node_modules/react";
import { connect } from "./node_modules/react-redux";
import "../SCSS/DetailBanner.scss";
import { Carousel, WingBlank } from "./node_modules/antd-mobile";

class DetailBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHeight: 176
    };
  }
  render() {
    return (
      <Fragment>
        <WingBlank>
          <Carousel autoplay={false} infinite>
            {this.props.list[0].pictures.map(val => (
              <div className="mint-swipe-item" key={val}>
                <div className="product-img-box pointer">
                  <img alt="" src={val} className="lazy-img" style={{ width: "100%", verticalAlign: "top" }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event("resize"));
                      this.setState({ imgHeight: "auto" });
                    }}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </WingBlank>
      </Fragment>
    );
  }
}

export default connect(state => {
  return state;
})(DetailBanner);
