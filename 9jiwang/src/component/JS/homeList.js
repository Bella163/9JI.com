import React, {Component} from 'react';
import '../SCSS/homeList.scss'
import {Link,withRouter} from 'react-router-dom'
import axios from 'axios'
import Loading from './loading';
import LoadMore from './loadingMore'

class HomeList extends Component {
    constructor(props) {
        super(props);
        this.state={
            Arr:[],
            isShowLoading: true
        }
    }
    render() {
        // console.log(this);
        return (
            <div className="homeList">
                <ul >
                    {
                        this.state.Arr.map((item,idx)=>{
                            return(
                                <li key={item.ppid} onClick={this.Jump.bind(this,item.ppid,item.price,item.productName)}>
                                    {/*<img src={require("../../static/img/homeList.jpg")}/>*/}
                                    <img src={item.imagePath}/>
                                    <p className="Remarks">{item.profile}</p>
                                    <p className="title">{item.productName}</p>
                                    <p className="price">￥{item.price}</p>

                                    {/*<Link key={idx} to={{*/}
                                    {/*    pathname: "/detail",*/}
                                    {/*    search: `?id=${item.ppid}`,*/}
                                    {/*}}>*/}
                                    {/*</Link>*/}
                                </li>
                            )
                        })
                    }
                </ul>
                <Loading status={this.state.isShowLoading}></Loading>
                <LoadMore status={this.state.isShowLoading}
                          limit={this.state.Arr.length}
                />
            </div>
        )
    }
    Jump(id,price,name){
        console.log(this)
        // this.props.history.push("/detail")
        // 获取history对象
        this.props.history.push({
            pathname:"/detail",
            search:'?id='+id,
            state:{
                id:id,
                name:name
            }
        })
    }
    LoadMore(){
        let li = '';
        axios
            .get("https://www.easy-mock.com/mock/5d14225adf701769acf0f28b/example/9ji_detail#!method=get",{
                parms: {

                }
            })
            .then((res)=>{
                li = res.data.data;
                sessionStorage.setItem("Arr",JSON.stringify([...this.state.Arr,...li]));
                // console.log("返回的数组",res.data,"li",li,typeof li);
            })
            .then(()=>{
                this.setState({
                    Arr:[...this.state.Arr,...li],
                    // Arr:this.state.Arr.concat(li),
                    isShowLoading:false,
                })
                // console.log("改变后的值为",this.state)
            })
    }
    componentDidMount() {
        if (sessionStorage.getItem("Arr")) {
            this.setState({
                Arr:JSON.parse(sessionStorage.getItem("Arr")),
                isShowLoading:false,
            })
        }else{
            this.LoadMore();
        }

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.Arr.length>12){
            return false
        }else{
            return true;
        }
    }
}
export default withRouter(HomeList)
