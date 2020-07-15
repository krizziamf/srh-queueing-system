import React from 'react';
import Header from '../components/Header';
import '../styles/user.css';



function Adult() {
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
                    <h1 className="queue">0</h1>
                </div>
                <button className="add-btn"><a href="#">ADD QUEUE</a></button>
                <a href="#" className="reset-btn">Reset Queue</a>
            </form>
        </div>
    )
}

export default Adult;