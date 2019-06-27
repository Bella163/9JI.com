import React, {Component} from 'react';

export default class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                opacity: 1,
                transition: 'opacity 0.1s linear 0s'
            }
        }
    }

    render() {
        // console.log("loading加载页", this.props);
        return (
            <div id="loadingToast" style={this.state.style}>
                <div className="weui-mask_transparent"></div>
                <div className="weui-toast">
                    <i className="weui-loading weui-icon_toast"></i>
                    <p className="weui-toast__content">数据加载中</p>
                </div>
            </div>
        )
    }

    componentWillReceiveProps(nextProps, nextContext) {
        // console.log("componentWillReceiveProps阶段", nextProps, nextContext);
        this.setState({
            style: nextProps.status ? {
                opacity: 1,
                transition: 'opacity 0.1s linear 0s'
            } : {
                opacity: 0,
                display: 'none',
                transition: 'opacity 0.1s linear 0s'
            },
        })
        // if (nextProps.status) {
        //     console.log("真的");
        // } else {
        //     console.log("假的")
        // }
    }
}
