import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import useSound from 'use-sound';
import Footer from './Footer';
import ding from './dingdong.mp3';
import '../styles/main.css';
const ENDPOINT = "https://floating-headland-22322.herokuapp.com/";


function Main() {
    const [play] = useSound(ding);
    let date = new Date();
    const [cashierResponse, setCashierResponse] = useState(0);
    const [pediaResponse, setPediaResponse] = useState(0);
    const [adultResponse, setAdultResponse] = useState(0);
    const [emergencyResponse, setEmergencyResponse] = useState(0);
    const [logs, setLog] = useState();




    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);

        socket.on("FromCashier", data => {
            if (cashierResponse !== data) {
                setCashierResponse(data);
                let cashier = document.getElementById("cashier");
                if (cashier) {
                    cashier.addEventListener("change", play());
                }
            }
            setLog(new Date().getTime());
        });

        socket.on("FromPedia", data => {
            if (pediaResponse !== data) {
                setPediaResponse(data);
                let pedia = document.getElementById("pedia");
                if (pedia) {
                    pedia.addEventListener("change", play());
                }
            }
            setLog(new Date().getTime());
        });

        socket.on("FromAdult", data => {
            if (adultResponse !== data) {
                setAdultResponse(data);
                let adult = document.getElementById("adult");
                if (adult) {
                    adult.addEventListener("change", play());
                }
            }
            setLog(new Date().getTime());
        });

        socket.on("FromEmergency", data => {
            if (emergencyResponse !== data) {
                setEmergencyResponse(data);
                let er = document.getElementById("er");
                if (er) {
                    er.addEventListener("change", play());
                }
            }
            setLog(new Date().getTime());
        });

    }, [logs]);

    return (
        <section className="main-container">
            <div className="row justify-content-center ">
                <div className="col-md-6 now_serving">
                    <h1>NOW SERVING</h1>
                </div>
            </div>
            {/* <button onClick={play}>CLICK</button> */}
            <div className="row justify-content-center main-row">
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-3 main-col">
                    <div className="main-pedia">PEDIA</div>
                    <h1 id="pedia">{pediaResponse}</h1>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-3 main-col">
                    <div className="main-adult">ADULT</div>
                    <h1 id="adult">{adultResponse}</h1>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-3 main-col">
                    <div className="main-er">ER</div>
                    <h1 id="er">{emergencyResponse}</h1>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 col-xl-3 main-col">
                    <div className="main-ca">CASHIER</div>
                    <h1 id="cashier">{cashierResponse}</h1>
                </div>

            </div>
        </section>
    )
}

export default Main;