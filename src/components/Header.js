import React, { Component } from 'react'
import '../styles/header.css';


class Header extends Component {
    render() {
        return (
            <div className="srh-header" >
                <marquee behavior="scroll" direction="right"><h1>STO. ROSARIO HOSPITAL </h1></marquee>
            </div>
        )

    }

}

export default Header;