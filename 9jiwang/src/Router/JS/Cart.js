import React, {Component} from 'react';
import '../SCSS/router.scss';
import Footer from '../../component/JS/footer';

class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bigBox">
                <div className="main">
                    Cart购物车页
                </div>
                <Footer className="footer"></Footer>
            </div>
        )
    }
}
export default Cart
