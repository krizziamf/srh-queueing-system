import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import audioFile from './bell.mp3';
import '../styles/user.css';

const socket = io.connect("http://localhost:4000");

const audio = new Audio();

function Pedia() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [role, setRole] = useState("");


    useEffect(() => {
        console.log("COUNT " + count)
        passData();

        function receiveMessage(m) {
            if (role === 'server') {
                audio.src = m.path;
                audio.play();
            }
        }
        socket.on('play', receiveMessage);

        return () => {
            socket.off('play', receiveMessage);
        }


    }, [count])

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const passData = () => {
        axios.post("/pedia", { count })
            .then(res => console.log(res))
            .catch(err => console.log("ERROR " + err))
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    }

    const resetCount = () => {
        setCount(initialCount);
    }

    function handlePlaySound() {
        socket.emit("play", { name: 'Test sound', path: audioFile });
        console.log('hello!');
    }

    return (
        <section className="user-container">
            <div className="container-fluid ">
                <div className="user-div-center">
                    <div className="pedia__title-div">
                        <h1 className="user__title">PEDIA</h1>
                    </div>
                    <h2>CURRENT QUEUE</h2>
                    <p>{count}</p>
                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={() => { incrementCount(); handlePlaySound(); setRole('server'); }}>ADD QUEUE</button>
                    <button type="button" class="btn btn-light" onClick={() => { resetCount(); setRole('client'); }}>Reset Queue</button>
                </div>
            </div >
        </section >
    )
}

export default Pedia;
