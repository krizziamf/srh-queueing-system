import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import Footer from './Footer';
import '../styles/main.css';
import useSound from 'use-sound';
import audioFile from './bell.mp3';
const ENDPOINT = "http://localhost:4000";


const audio = new Audio();

function Main() {
    let date = new Date();
    const [cashierResponse, setCashierResponse] = useState(0);
    const [pediaResponse, setPediaResponse] = useState(0);
    const [adultResponse, setAdultResponse] = useState(0);
    const [emergencyResponse, setEmergencyResponse] = useState(0);
    const [logs,setLog] = useState();
    const [play] = useSound(audioFile);


    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);

        socket.on("FromCashier", data => {
            console.log("CASHIER RESPONSE");
            if(cashierResponse !== data) {
                console.log("CASHIER");
                setCashierResponse(data);
                console.log("LOG COUNT "+logs)
                let cashier = document.getElementById("cashier");
                if (cashier) {
                    console.log("CASHIER SOUND");
                    cashier.addEventListener("change", play());
                }
            }
            setLog(new Date().getTime());
        });

        socket.on("FromPedia", data => {
            console.log("PEDIA RESPONSE");
            if(pediaResponse !== data) {
                console.log("PEDIA");
                setPediaResponse(data);
                console.log("LOG COUNT "+logs)
                let pedia = document.getElementById("pedia");
                if (pedia) {
                    console.log("PEDIA SOUND");
                    pedia.addEventListener("change", play());
                }
            }
            setLog(new Date().getTime());
        });

        socket.on("FromAdult", data => {
            console.log("ADULT RESPONSE");
            if(adultResponse !== data) {
                console.log("ADULT");
                setAdultResponse(data);
                console.log("LOG COUNT "+logs)
                let adult = document.getElementById("adult");
                if (adult) {
                    console.log("ADULT SOUND");
                    adult.addEventListener("change", play());
                }
            }
            setLog(new Date().getTime());
        });

        socket.on("FromEmergency", data => {
            console.log("ER RESPONSE");

            if(emergencyResponse !== data) {
                console.log("EMERGENCY");
                setEmergencyResponse(data);
                console.log("LOG COUNT "+logs)
                let er = document.getElementById("er");
                if (er) {
                    er.addEventListener("change", play());
                }
            }
            setLog(new Date().getTime());
        });

    },[logs]);

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