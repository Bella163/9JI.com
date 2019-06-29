import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom'
import '../SCSS/footer.scss';

 class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: [{
                text: "首页",
                url: '/home',
                badge: 0,
                className:"icon-yinle",
            }, {
                text: "分类",
                url: '/sort',
                badge: 0,
                className:"icon-dianli",
            }, {
                text: "消息",
                url: '/msg',
                badge: 1,
                className:"icon-wode-xiaoxi",
            }, {
                text: "购物车",
                url: '/cart',
                badge: 2,
                className:"icon-faxian",
            },{
                text: "我的",
                url: '/mine',
                badge: 0,
                className:"icon-icon_account",
            },
            ],
            style:{
                color:"#F21C1C",
            }
        }
    }

    render() {
        console.log(this.props.match.path);
        return (
            <div className="weui-tabbar">
                {this.state.tab.map((item,idx) => {
                    return (
                        <Link
                            key={idx} to={{
                            pathname: item.url,
                            state: { fromDashboard: true }
                        }}
                            // className="weui-tabbar__item weui-bar__item_on">
                            className={
                                this.props.match.path==item.url?
                                    "weui-tabbar__item weui-bar__item_on active":
                                    "weui-tabbar__item"}
                        >
                        <span style={{
                            display: 'inline-block',
                            position: 'relative'
                        }}>
                        <i className={`iconfont ${item.className}`}/>
                        {/*<img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon"/>*/}
                            {
                                item.badge > 0 ?
                                    (item.badge === 1 ?
                                        (<span className="weui-badge weui-badge_dot"
                                               style={{
                                                   position: 'absolute',
                                                   top: '0',
                                                   right: '-6px',
                                               }}>
                                        </span>)
                                        :
                                        (<span className="weui-badge"
                                               style={{
                                                   position: 'absolute',
                                                   top: '-2px',
                                                   right: '-13px'
                                               }}>{item.badge}
                                        </span>))
                                    : ''
                            }
                            {/*数字标记的圆点*/}
                            {/*<span className="weui-badge"*/}
                            {/*      style={{*/}
                            {/*          position: 'absolute',*/}
                            {/*          top: '-2px',*/}
                            {/*          right: '-13px'*/}
                            {/*      }}>{item.badge}*/}
                            {/*</span>*/}
                            {/*只有红点标记的圆点*/}
                            {/*<span className="weui-badge weui-badge_dot"*/}
                            {/*      style={{*/}
                            {/*          position: 'absolute',*/}
                            {/*          top: '0',*/}
                            {/*          right: '-6px',*/}
                            {/*      }}>*/}
                            {/*</span>*/}
                    </span>
                            <p className="weui-tabbar__label">{item.text}</p>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
export default withRouter(Footer)
