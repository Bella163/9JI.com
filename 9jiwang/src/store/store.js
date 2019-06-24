import { createStore } from 'redux';
import reducer from './reducer';
//仓库
const defaultState={
    isLogin:false,
    token:null,
    username:null,
    history:null,     //路由对象
};
export default createStore(reducer)
