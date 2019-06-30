import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../scss/App.scss';
// import { Route, Link, withRouter } from "react-router-dom";
// import List from "./List";



class Sort extends Component {
    handleClick(name){
        // console.log(this,this.$route)
        this.props.history.push('/list?name='+ name+'&category=电脑办公')
    }
    render() {
        let name = "华硕"
        return (
            <div onClick={this.handleClick.bind(this,name)}>1111111111111111111

                {/* <Route path={"/list"+ name} component={List}></Route> */}
            </div>
        )
    }
}
export default connect ((state)=>{
return state;
})(Sort)