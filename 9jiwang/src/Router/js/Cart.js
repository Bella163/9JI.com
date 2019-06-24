import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../scss/Cart.scss';

import CartHeader from '../../component/js/CartHeader';
import CartItem from '../../component/js/CartItem';

class Cart extends Component {
    render() {
        return (
            <div className="wrapper full-height">
                <CartHeader/>
                <CartItem/>
            </div>
        )
    }
}
export default connect ((state)=>{
return state;
})(Cart)
