// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import '../SCSS/header.scss';
// import Search from '../search/search'

// eslint-disable-next-line react/require-render-return
class Header extends Component{
    state = {
        data:'',
        page:0,
        tab:[{
            idx:0,
            name:"推荐",
            path:'/com1'
        },{
            idx:1,
            name:"限时购",
            path:'/com2'
        },{
            idx:2,
            name:"拼团购",
            path:'/com3'
        },{
            idx:3,
            name:"手机快修",
            path:'/com4'
        },{
            idx:4,
            name:"以旧换新",
            path:'/com5'
        },{
            idx:5,
            name:"头条",
            path:'/com6'
        }],
        style:{
            color:"blue",
            fontWeight:"bold"
        },
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log("componentDidUpdate",this.state.page,prevState)
    }
    componentWillUpdate(nextProps, nextState, nextContext) {

    }

    render(){
        // console.log("this.props",this.props);
        // console.log(this);
        return (
            <header className='header'>
                {/*{this.props.name?this.props.name:''}*/}
                <section className="search">
                    <div>
                        <span>
                            <select id="AreaId" name="AreaId" size="1" className="sel">
                               <option>-请选择地区-</option>
                            </select>
                        </span>
                        <input type="text" placeholder="华为P30"/>
                    </div>
                </section>
                <section className="item clearfix">
                    <ul className="ul clearfix">
                        {
                            this.state.tab.map((item,idx)=>{
                                return <li key={idx} className={
                                              idx === this.state.page ? "activeItem":""
                                           }>
                                    <p
                                        // key={item.id}
                                        // to={item.path}
                                        // activeClassName="active"
                                        // activeStyle={{
                                        //     color:"blue",
                                        //     fontWeight:"bold"
                                        // }}
                                        onClick={ ()=>{
                                                this.setState({
                                                    page:item.idx,
                                                })
                                                console.log(idx,item.idx,item.name,this)
                                            // setTimeout(function () {
                                            //     console.log(idx,item.idx,item.name,this)
                                            // }.bind(this),5000)
                                            }}>
                                        <span>{item.name}</span>
                                    </p>
                                </li>
                            })
                        }
                    </ul>
                </section>
            </header>
        )
    }

}
export default connect ((state)=>{
    return state;
})(Header)
