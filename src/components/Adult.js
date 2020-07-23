import React, { useState } from "react";
import Header from '../components/Header';
import '../styles/user.css';



function Adult() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="user-container">
            <form className="user-center">
                <div className="adult__title-div">
                    <h1 className="user__title">ADULT</h1>
                </div>
                <div>
                    <h1 className="current-queue">CURRENT QUEUE</h1>
                </div>
                <div>
                    <h1 className="queue">{count}</h1>
                </div>
                <button className="add-btn" onClick={handleIncrement}><a href="#">ADD QUEUE</a></button>
                <a href="#" className="reset-btn" onClick={() => setCount(0)}>Reset Queue</a>
            </form>
        </div>
    )
}

export default Adult;