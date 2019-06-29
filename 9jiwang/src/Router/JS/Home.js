import React, {Component} from 'react';
// 引入router样式
import '../SCSS/router.scss';
import Header from '../../component/JS/header';
import Footer from '../../component/JS/footer';
// import style from './Home.module.scss';
import Nav from '../../component/JS/nav'
import Nav_detail from '../../component/JS/Nav_detail'
import HomeList from '../../component/JS/homeList'

let timer = undefined;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // this.refs.main.onscroll = (e)=>{
        //     console.log(this.refs.main.scrollTop);
        //     console.log(e)
        // }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.refs.main.onscroll = ()=>{
            if (this.refs.main.scrollY>630) {
                this.refs.backTop.style.display='block';
                return true;
            }else{
                return false;
            }
        }

    }
    componentWillUnmount() {
        clearInterval(timer)
    }

    //回顶
    back(){
        clearInterval(timer);
        // let current;
        timer=setInterval( ()=>
        {
            let current=this.refs.main.scrollTop;
            let speed=Math.floor((0-current)/10);
            current+=speed;
            if (current<=0) {
                clearInterval(timer);
            }
            console.log(current,typeof current);
            // this.refs.main.scrollTop(0,current);
        },30)
    }

    render() {
        return (
            <div className="bigBox">
                <Header name="支付宝" className="header"></Header>
                <div className="main" ref="main">
                    <Nav></Nav>
                    <Nav_detail></Nav_detail>
                    <HomeList></HomeList>
                </div>
                <Footer className="footer"></Footer>
                <img className="back" style={{display:"block"}}
                     src={require("../../static/img/back.jpg")}
                     ref="backTop"
                     onClick={this.back.bind(this)}
                />
            </div>
        )
    }

}
