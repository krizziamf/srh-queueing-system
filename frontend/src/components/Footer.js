
import React, { Component } from 'react'
// import Time from './Time';
import * as ReactDOM from "react-dom";
import '../styles/footer.css';


class Footer extends Component {
    render() {
        function date() {
            const element = (
                <span>{new Date().toLocaleDateString()}</span>

            );
            ReactDOM.render(element, document.getElementById('date'));
        }

        function time() {
            const element = (
                <span>{new Date().toLocaleTimeString()}</span>
            );
            ReactDOM.render(element, document.getElementById('time'));
        }

        setInterval(date, 1000);
        setInterval(time, 1000);

        return (
            <footer className="footer">
                <section className="container-fluid">
                    <div className="row">
                        <div className="col footer-col footer-contactnum">
                            <p >STO ROSARIO HOSPITAL CONTACT #:</p>
                            <div><p><i class="fas fa-mobile-alt"></i> 0932-843-6537 | <i class="fas fa-phone"></i> 781-3331</p></div>
                        </div>
                        <div className="col footer-col time__container">
                            <div className="date_time">Date: <p id="date"></p></div>
                            <div className="date_time">Time: <p id="time"></p></div>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}


export default Footer;