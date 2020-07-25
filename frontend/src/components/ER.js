import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import '../styles/user.css';


function Er() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);


    useEffect(() => {
        console.log("COUNT "+ count)
        passData();
    },[count])

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const passData = () => {
        axios.post("/emergency", {count})
            .then(res => console.log(res))
            .catch(err => console.log("ERROR "+err))
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    }

    const resetCount = () => {
        setCount(initialCount);
    }

    return (
        <div className="user-container">
            {/* <form className="user-center"> */}
                <div className="er__title-div">
                    <h1 className="user__title">Emergency Room(ER)</h1>
                </div>
                <div>
                    <h1 className="current-queue">CURRENT QUEUE</h1>
                </div>
                <div>
                    <h1 className="queue">{count}</h1>
                </div>
                <button className="add-btn" onClick={incrementCount}>ADD QUEUE</button>
                {/* <a href="#" className="reset-btn">Reset Queue</a> */}
                <button onClick={resetCount}>Reset</button>
            {/* </form> */}
        </div>
    )
}


export default Er;