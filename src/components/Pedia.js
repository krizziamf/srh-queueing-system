import React from 'react';
import Header from '../components/Header';
import '../styles/user.css';


function Pedia() {
    return (
        <div className="user-container">
            <form className="user-center">
                <div className="pedia__title-div">
                    <h1 className="user__title">PEDIA</h1>
                </div>
                <h1 className="current-queue">CURRENT QUEUE</h1>
                <h1 className="queue"></h1>
                <button className="add-btn" ><a href="#">ADD QUEUE</a></button>
                <a href="#" className="reset-btn">Reset Queue</a>
            </form>
        </div>
    )
}

export default Pedia;