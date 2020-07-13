import React, { Component } from 'react'
// import Header from './component/Header';
// import Footer from './Footer';
import '../styles/main.css';


class Main extends Component {
    render() {
        return (
            <div className="main-container">
                <div class="row">
                    <div class="col main-col">
                        <div className="main-pedia">PEDIA</div>
                        <h1>6</h1>
                    </div>
                    <div class="col main-col">
                        <div className="main-adult">ADULT</div>
                        <h1>100</h1>
                    </div>
                    <div class="col main-col">
                        <div className="main-er">ER</div>
                        <h1>7</h1>
                    </div>
                    <div class="col main-col">
                        <div className="main-ca">CASHIER</div>
                        <h1>6</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;