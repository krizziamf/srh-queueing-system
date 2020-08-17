
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
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6 footer-col footer-contactnum text-center">
                            <p>STO ROSARIO HOSPITAL CONTACT #:</p>
                            <p><i class="fas fa-mobile-alt"></i> 0932-843-6537 | <i class="fas fa-phone"></i> 781-3331</p>
                        </div>
                        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 footer-col time__container">
                            <div className="row mx-auto text-center">
                                <div className="col-sm-12 col-lg-4 col-xl-4">
                                    <label className="date_time">Date:<p id="date"></p></label>
                                </div>
                                <div className="col-sm-12  col-lg-5 col-xl-5">
                                    <label className="date_time">Time: <p id="time"></p></label>
                                </div>
                            </div>
                            {/* <div className="col">
                                   
                                </div> */}

                        </div>
                    </div>
                </section>
            </footer >
        )
    }
}


export default Footer;