import React, { Component } from 'react'
import '../styles/header.css';


class Header extends Component {
    render() {
        return (
            <section className="srh-header" >
                <div className="navbar-brand">
                    <span><img src="./images/logo2.jpg" width="130px;" height="80px" /></span>
                    <span className="navbar-text">STO. ROSARIO HOSPITAL</span>
                </div>
            </section>
        )

    }

}

export default Header;