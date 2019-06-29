import React, {Component} from 'react';
import './router.scss';
import Header from '../../component/header/header'

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bigBox">
                <Header name="支付宝" className="header"></Header>
            </div>
        )
    }
}
