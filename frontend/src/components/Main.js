import React, { useState, useEffect } from 'react';
// import Header from './component/Header';
import socketIOClient from "socket.io-client";
import Footer from './Footer';
import '../styles/main.css';
const ENDPOINT = "http://localhost:4000";


function Main() {

    const [cashierResponse, setCashierResponse] = useState("");
    const [pediaResponse, setPediaResponse] = useState("");
    const [adultResponse, setAdultResponse] = useState("");
    const [emergencyResponse, setEmergencyResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromCashier", data => {
            setCashierResponse(data);
        });
        socket.on("FromPedia", data => {
            setPediaResponse(data);
        });
        socket.on("FromAdult", data => {
            setAdultResponse(data);
        });
        socket.on("FromEmergency", data => {
            setEmergencyResponse(data);
        })
    }, []);




    return (
        <section className="main-container">
            <div className="now_serving">
                <h1>NOW SERVING</h1>
            </div>
            <div className="row justify-content-center main-row">
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-3 main-col">
                    <div className="main-pedia">PEDIA</div>
                    <h1>{pediaResponse}</h1>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-3 main-col">
                    <div className="main-adult">ADULT</div>
                    <h1>{adultResponse}</h1>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-2 main-col">
                    <div className="main-er">ER</div>
                    <h1>{emergencyResponse}</h1>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-3 main-col">
                    <div className="main-ca">CASHIER</div>
                    <h1>{cashierResponse}</h1>
                </div>

            </div>
        </section>
    )
}

export default Main;