import React, {Component} from 'react';
import Swiper from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.min.css'
import {Carousel, Input, Tabs, Icon} from 'antd';
import {Link} from 'react-router-dom'
import '../SCSS/nav.scss'


class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[{
                key:0, imgUrl:"https://img2.ch999img.com/newstatic/1383/e8d4e0da87b6d5.jpg.webp"
            },{
                key:1, imgUrl:"https://img2.ch999img.com/newstatic/1379/e5bed02435a4c3.png.webp"
            },{
                key:2, imgUrl:"https://img2.ch999img.com/newstatic/1378/e8d4b964d384e0.jpg.webp"
            },{
                key:3, imgUrl:"https://img2.ch999img.com/newstatic/1377/e8d44d89f9300d.jpg.webp"
            }],
            nav_center:["正品","低价","售后"],
            icon_link:[{
                id:0, src:"https://img2.ch999img.com/newstatic/1380/c3ddda6e826c63.png.webp",
            },{
                id:1, src:"https://img2.ch999img.com/newstatic/1381/c3dddd86d52fb9.png.webp",
            },{
                id:2, src:"https://img2.ch999img.com/newstatic/1381/c3dde0f97f908c.png.webp",
            },{
                id:3, src:"https://img2.ch999img.com/newstatic/1377/c3dde4511c8d42.png.webp",
            },{
                id:4, src:"https://img2.ch999img.com/newstatic/1381/c3ddea2a9bca47.png.webp",
            }]
        }
        this.methods = this.methods.bind(this);
        this.methods();
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    methods() {
        this.next = () => {
            // this.slider.slick.slickNext();
            // next();
            console.log("next")
        }
    }
    next() {
        // this.slider.slick.slickNext();
        this.refs.slick.slick.slickNext();
    }
    prev() {
        // this.slider.slick.slickPrev();
        this.refs.slick.slick.slickPrev();
    }
    componentDidMount() {
        console.log(this.refs.slick.slick);
    }

    render() {
        const settings = {
            autoplay: true,//自动播放
            dotPosition: "bottom",//只显示在底部
            dots: true,//是否显示指示板
            easing: "linear",//动画开关
            effect: "scrollx",//横向播放
            lazyLoad: true,//懒加载
            arrows:true,//显示箭头
            speed: 500,//停留时间
            // autoplaySpeed: 500,//切换速度
            // infinite: true,
            // speed: 500,
            // slidesToShow: 1,
            // slidesToScroll: 1,
        };
        // console.log(this)
        // const requireContext = require.context("../../static/img",true, /^\.\/.*\.png$/);
        // const projectImgs = requireContext.keys().map(requireContext);
        return (
            <div className="nav clearfix">
                <div className="banner clearfix">
                    <Carousel {...settings}
                              // ref={el => (this.slider = el)}
                              ref="slick"
                    >
                        {
                            this.state.data.map((item,idx)=>{
                                return (
                                    <div key={item.key}>
                                        {/*<img src={require(`'${item.imgUrl}'`)}/>*/}
                                        <img src={item.imgUrl}/>
                                        {/*<img src={require("../../static/img/nav1.jpg")}/>*/}
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <Icon className="Iconleft" type="left" />
                    <Icon className="Iconright" type="right" />
                </div>
                <div className="nav_center">
                    {
                        this.state.nav_center.map((item,idx)=>{
                            return (
                                <div className="small_icon" key={idx}>
                                    <Icon type="check" />
                                    <span>{item}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="nav_bottom">
                    <ul className="clearfix">
                    {
                        this.state.icon_link.map((item,idx)=>{
                            return (
                                <li key={idx}>
                                    {/*<img src={require("../../static/img/nav_bottom1.jpg")}/>*/}
                                    <img src={item.src}/>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div className="bg">
                    <img src={require("../../static/img/bg1.jpg")}/>
                    <img src={require("../../static/img/bg2.jpg")}/>
                </div>

            </div>
        )
    }
}

export default Nav;
