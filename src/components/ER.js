import React from 'react';
import Header from '../component/Header';
import '../style/user.css';


function Er() {
    return (
        <div className="user-container">
            <div className="logout__div">
                <a href="#" className="logout-btn">Logout</a>
            </div>
            <form className="user-center">
                <div className="er__title-div">
                    <h1 className="user__title">Emergency Room(ER)</h1>
                </div>
                <h1 className="current-queue">CURRENT QUEUE</h1>
                <h1 className="queue">{this.state.count}</h1>
                <button className="add-btn" onClick={() => this.increment()}><a href="#">ADD QUEUE</a></button>
                <a href="#" className="reset-btn">Reset Queue</a>
            </form>
        </div>
    )
}


export default Er;