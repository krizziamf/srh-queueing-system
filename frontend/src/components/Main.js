import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import useSound from 'use-sound';
import Footer from './Footer';
import ding from './dingdong.mp3';
import '../styles/main.css';
const ENDPOINT = "http://localhost:4000";


function Main() {
    const [play] = useSound(ding);
    const [cashierResponse, setCashierResponse] = useState(0);
    const [pediaResponse, setPediaResponse] = useState(0);
    const [adultResponse, setAdultResponse] = useState(0);
    const [emergencyResponse, setEmergencyResponse] = useState(0);


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
            <div className="row justify-content-center ">
                <div className="col-md-6 now_serving">
                    <h1>NOW SERVING</h1>
                </div>
            </div>
            <div className="row justify-content-center main-row">
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-3 main-col">
                    <div className="main-pedia">PEDIA</div>
                    <h1>{pediaResponse}</h1>
                    <button onClick={play}>s</button>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-3 main-col">
                    <div className="main-adult">ADULT</div>
                    <h1>{adultResponse}</h1>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-3 main-col">
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