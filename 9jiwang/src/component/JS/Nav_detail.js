import React, {Component} from 'react';
import '../SCSS/nav_detail.scss'
import {Link,withRouter} from 'react-router-dom'
import axios from 'axios'
import Loading from "./loading";

let timer = undefined;

class Nav_detail extends Component {

    constructor(props) {
        super(props);
        this.state={
            endtime:new Date("2019-6-30 9:33:00"),
            shopList:[],
            isShowLoading:true,
        }
    }

    render() {
        // console.log(this.refs.showtime);
        return (
            <div className="Nav_detail">
                <div className="Nav_content">
                    <section className="nav_left">
                        <span className="l_title">限时抢购</span>
                        <p className="msg">每天10点开始</p>
                        <p className="start">距开始</p>
                        <p className="time">
                            <span ref="showtime">123</span>
                        </p>
                    </section>
                    <section className="nav_right">
                        <ul>
                            {
                                this.state.shopList.map((item,idx)=>{
                                    return (
                                        <li key={item.ppid}>
                                            <p className="title">{item.productName}</p>
                                            <p className="price">￥{item.price}</p>
                                            <p className="ponit">{item.skuName}</p>
                                            <img src={item.imagePath}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </div>
                <div className="Slogan">
                    <img src={require("../../static/img/Slogan1.jpg")}/>
                    <img src={require("../../static/img/Slogan2.jpg")}/>
                </div>
                <Loading status={this.state.isShowLoading}></Loading>
            </div>
        )
    }
    //挂载前开启定时器
    componentWillMount() {
        this.CountDown();
    }

    //已经挂载请求axios存储于sessionStorage
    componentDidMount () {
        if (sessionStorage.getItem("arr")){
            this.setState({
                shopList:JSON.parse(sessionStorage.getItem("arr")),
                isShowLoading:false,
            })
        } else{
            this.renderShop();
        }
    }

    //清除定时器
    componentWillUnmount() {
        clearInterval(timer);
    }

    //商品的倒计时
    CountDown(){
        console.log(this);
        //0.设置结束时间
        let endtime = this.state.endtime;
        // console.log(endtime,this.refs.showtime.innerText);
        //1.一进入页面执行一次
        daoshu.bind(this);
        //2.定时器间隔执行，获取当前时间。
        clearInterval(timer);
        timer=setInterval(daoshu.bind(this),1000);
        function daoshu()
        {
            let nowtime=new Date();
            let offset=parseInt((endtime.getTime()-nowtime.getTime())/1000);
            if (offset <= 0) {
                clearInterval(timer);
                console.log("停止",offset);
            }
            let miao=offset%60;
            let minute=parseInt(offset/60)%60;
            let hour=parseInt(offset/60/60) % 24;
            let date=parseInt(offset/60/60/24);
            if (this.props.match.path == "/home"){
                this.refs.showtime.innerText = bushu(date)+"天"+bushu(hour)+":"+bushu(minute)+":"+bushu(miao)+"";
            } else {
                clearInterval(timer);
            }
            // console.log(bushu(date)+"天"+bushu(hour)+"时"+bushu(minute)+"分"+bushu(miao)+"秒");
        }
        function bushu(num)
        {
            if (num < 10) {
                num="0"+num;
            }
            return num;
        }
    }

    renderShop(){
        let data='';
        axios
            .get("https://www.easy-mock.com/mock/5d14225adf701769acf0f28b/example/9ji_detail#!method=get",{
                params:{

                }
            })
            .then((res)=>{
                data = res.data.data;
                // console.log(data,typeof data);
                sessionStorage.setItem("arr",JSON.stringify([...this.state.shopList, ...data]))
            })
            .then(()=>{
                // let {phone,mobile_accessories,apple,asus,router} = data;
                this.setState({
                    shopList:[...this.state.shopList, ...data],
                    isShowLoading:false,
                })
                console.log("请求后的数组",this.state.shopList)
            })
    }
}

export default withRouter(Nav_detail);
