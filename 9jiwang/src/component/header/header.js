// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {connect} from 'react-redux'

import './header.css';

// eslint-disable-next-line react/require-render-return
class Header extends Component{
    state = {
        data:'',

    }
    componentDidMount(){
        // console.log("this.props",this.props);
    }
    componentWillMount () {
        // console.log("===========componentWillMount=================");
        // console.log(this.props)
        // this.setState({
        //     data :this.props,
        // })
    }
    render(){
        // let {data} = this.props;
        // console.log("this.props",this.props);
        return (
            <header className='header'>{this.props.name?this.props.name:''}</header>
        )
    }
}
export default connect ((state)=>{
    return state;
})(Header)
