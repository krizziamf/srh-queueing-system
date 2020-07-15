import React from 'react'
// import Header from './component/Header';
import Footer from './Footer';
import '../styles/main.css';


function Main() {
    return (
        <section className="main-container">
            <div className="now_serving">
                <h1>NOW SERVING</h1>
            </div>
            <div className="row main-row">
                <div className="col main-col">
                    <div className="main-pedia">PEDIA</div>
                    <h1>6</h1>
                </div>
                <div className="col main-col">
                    <div className="main-adult">ADULT</div>
                    <h1>100</h1>
                </div>
                <div className="col main-col">
                    <div className="main-er">ER</div>
                    <h1>7</h1>
                </div>
                <div className="col main-col">
                    <div className="main-ca">CASHIER</div>
                    <h1>6</h1>
                </div>

            </div>
            <div className="row">
                <div className="col-12">
                    <Footer />
                </div>
            </div>

        </section>
    )
}

export default Main;