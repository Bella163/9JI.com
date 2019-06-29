import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import style from './style.scss';
// React.Component.$style = style;
import './index.css';
//引入公共样式表
import './Base.css'

// import axios from 'axios'
// React.Component.prototype.$axios = axios;

//引入we-ui
import 'weui'
// 引入ant-ui
import 'antd/dist/antd.css';

import * as serviceWorker from './serviceWorker';
// 引入处理器redux工具包
import {Provider} from 'react-redux'
// 引入仓库所在文件路径
import store from './store/store'
// 引入路由工具包
import { BrowserRouter as Router, Route ,Redirect, Switch, withRouter  } from "react-router-dom";
//引入awesome字体图标样式
import './assets/fonts/font-awesome-4.7.0/scss/font-awesome.scss';


//引入js文件
import Home from './Router/JS/Home'
import Detail from './Router/JS/Detail'
import Sort from './Router/JS/Sort'
import Msg from './Router/JS/Msg'
import Cart from './Router/JS/Cart'
import Mine from './Router/JS/Mine'

ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            {/*<Redirect from="/" to="/home"/>*/}
            <Route exact path="/home" component={Home} render={()=><div>主页</div>}/>
            <Route exact path="/sort" component={Sort} />
            <Route exact path="/msg" component={Msg} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/mine" component={Mine} />
            {/*<Redirecct to="/404"/>*/}
        </Switch>
        <Switch>
            <Route path="/detail" component={Detail} />
            {/*<Route exact path="/detail/:id" component={Detail} />*/}
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

