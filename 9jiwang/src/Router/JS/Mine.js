import React, {Component} from 'react';
import '../SCSS/Mine.scss';
import Footer from '../../component/JS/footer';
import { Input,Icon } from 'antd';

class Mine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            base: [
                {content:"账户余额", num:0},
                {content:"优惠券", num:0},
                {content:"积分", num:0},
                {content:"九机币", num:0},
            ],
            information: [{
                id:0,
                title: "我的订单",
                more:"全部订单",
                detail: [
                    {mess:"待付款",img:"https://img2.ch999img.com/newstatic//1383/b35d3926831d6c.png.webp"},
                    {mess:"待收货",img:"https://img2.ch999img.com/newstatic//1377/b35da66dc4c871.png.webp"},
                    {mess:"待评价",img:"https://img2.ch999img.com/newstatic//1381/b35db88b48d48d.png.webp"},
                    {mess:"维修订单",img:"https://img2.ch999img.com/newstatic//1378/b35e002dc9dcf7.png.webp"},
                    ],
            }, {
                id:1,
                title: "我的信息",
                more:"",
                detail: [
                    {mess:"收藏商品",img:"https://img2.ch999img.com/newstatic//1380/b35e984b375ff9.png.webp"},
                    {mess:"浏览记录",img:"https://img2.ch999img.com/newstatic//1377/b35eba19f22b8b.png.webp"},
                    {mess:"我的贴膜",img:"https://img2.ch999img.com/newstatic//1381/d859509e469e32.png.webp"},
                    {mess:"电子保修卡",img:"https://img2.ch999img.com/newstatic//1380/b35fab0b3f66fb.png.webp"},
                ],
            }, {
                id:2,
                title: "常用功能",
                more:"更多功能",
                detail:[
                    {mess:"领券中心",img:"https://img2.ch999img.com/newstatic//1379/b35f1767604d34.png.webp"},
                    {mess:"会员俱乐部",img:"https://img2.ch999img.com/newstatic//1378/b35ef212a7f78a.png.webp"},
                    {mess:"发票管理",img:"https://img2.ch999img.com/newstatic//1381/b35edebdee2746.png.webp"},
                    {mess:"保修政策",img:"https://img2.ch999img.com/newstatic//1378/db2427c6657030.png.webp"},
                ],
            }, {
                id:3,
                title: "联系我们",
                more:"",
                detail:[
                    {mess:"我的投诉",img:"https://img2.ch999img.com/newstatic//1378/b35ff1ae8633fc.png.webp"},
                    {mess:"我的咨询",img:"https://img2.ch999img.com/newstatic//1379/b3600553a428f4.png.webp"},
                    {mess:"联系客服",img:"https://img2.ch999img.com/newstatic//1379/b3602a8440771d.png.webp"},
                    {mess:"帮助中心",img:"https://img2.ch999img.com/newstatic//1379/db214d6537c3d7.png.webp"},
                ],
            }],
            style:{
                opacity: 1,
                display:"block",
            }

        }
    }

    render() {
        return (
            <div className="bigBox1">
                <header className="header1">
                    <section className="header_top">
                        <span>设置</span>
                        <Icon type="setting" />
                    </section>
                </header>
                <div className="main1">
                    <section className="blank1"></section>
                    <section className="blank2"></section>
                    <section className="frame">
                        <div className="user"></div>
                        <div className="detail"></div>
                    </section>
                    <div className="content">
                        {
                            this.state.information.map((item,idx)=>{
                                return (
                                    <section key={item.id} key={idx}>
                                        <p className="List_title">
                                            <span className="title_left">{item.title}</span>
                                            <span className="title_right">{item.more}
                                            </span>
                                            <Icon type="right"  style={
                                                item.id%2==0 ?
                                                    {display:'block',opacity: 1,}
                                                    :{display:'none',opacity:0}
                                            }/>
                                        </p>
                                        <ul >
                                            {
                                                item.detail.map((items,index)=>{
                                                    return (
                                                        <li key={index}>
                                                            <img src={items.img} />
                                                            <p className="Imgtext">{items.mess}</p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </section>
                                    )
                            })
                        }
                    </div>
                </div>
                <Footer className="footer"></Footer>
            </div>
        )
    }
}

export default Mine
