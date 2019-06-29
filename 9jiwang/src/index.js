import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/font-awesome-4.7.0/scss/font-awesome.scss';
import './index.css';

import Detail from './Router/js/Detail';
import Cart from './Router/js/Cart';
import IRouter from './Router/js/IRouter';
import { Provider } from 'react-redux';
import store from './store/store';



import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        {/* <Detail /> */}
        {/* <Cart/> */}
        <IRouter/>
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
