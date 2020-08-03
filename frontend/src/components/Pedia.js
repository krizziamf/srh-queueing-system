import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../styles/user.css';


function Pedia() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);


    useEffect(() => {
        console.log("COUNT " + count)
        passData();
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


    return (
        <div className="user-container">
            <div className="container">
                <div className="row align-content-center">
                    <div className="col-sm-12 align-self-center">
                        <div className="w-50 mx-auto user-center">
                            <div className="pedia__title-div">
                                <h1 className="user__title">PEDIA</h1>
                            </div>
                            <div>
                                <h1 className="current-queue">CURRENT QUEUE</h1>
                            </div>
                            <div>
                                <h1 className="queue">{count}</h1>
                            </div>
                            <button className="add-btn" onClick={incrementCount}>ADD QUEUE</button>
                            <button onClick={resetCount}>Reset Queue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pedia;