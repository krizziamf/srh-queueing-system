import React, { Component } from 'react'
import '../styles/header.css';


class Header extends Component {
    render() {
        return (
            <section className="srh-header" >
                {/* <div className="navbar-brand">
                    <span><img src="./images/logo2.jpg" width="95px;" height="60px" /></span>
                    <span className="navbar-text">STO. ROSARIO HOSPITAL</span>
                </div> */}
                <nav className="navbar navbar-expand-sm navbar-light bg-light main-nav">
                    <div className="container justify-content-center">
                        <ul className="nav navbar-nav justify-content-center">
                            <li className="navbar-brand"><img src="./images/logo.png" width="95px;" height="65px" /></li>
                            <li className="navbar-text"><h2>Sto. Rosario Hospital</h2></li>
                        </ul>
                    </div>
                </nav>
            </section>
        )
    }
}

export default Header;