import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
// import '../styles/user.css';


function Cashier() {

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
        axios.post("/cashier", {count})
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
                <div className="cashier__title-div">
                    <h1 className="user__title">CASHIER</h1>
                </div>
                <div>
                    <h1 className="current-queue">CURRENT QUEUE</h1>
                </div>
                <div>
                    <h1 className="queue">{count}</h1>
                </div>
                <button className="add-btn" onClick={incrementCount}>ADD QUEUE</button>
                {/* <a href="#" className="reset-btn">Reset Queue</a> */}
                <button onClick={resetCount}>Reset Queue</button>
            {/* </form> */}
        </div>
    )
}

export default Cashier;



// import React, { useState, useEffect }from 'react';
// // import Queue from './Queue';
// import axios from 'axios';


// // export const Counter = React.createContext();

// function Cashier() {

//     const initialCount = 0;
//     const [count, setCount] = useState(initialCount);


//     useEffect(() => {
//         console.log("COUNT "+ count)
//         passData();
//     },[count])

//     const incrementCount = () => {
//         setCount(prevCount => prevCount + 1)
//     }

//     const passData = () => {
//         axios.post('/cashier', {count})
//             .then(res => console.log(res))
//             .catch(err => console.log(err))
//     }

//     const decrementCount = () => {
//         setCount(prevCount => prevCount - 1);
//     }

//     const resetCount = () => {
//         setCount(initialCount);
//     }

//     return (
//         <div>
//             <h1>CASHIER</h1>
//             <button onClick={incrementCount}>Increment</button>
//             <button onClick={decrementCount}>Decrement</button>
//             <button onClick={resetCount}>Reset</button>
//             <h1>{count}</h1>

//             {/* <Counter.Provider value={count}>
//                 <Queue />
//             </Counter.Provider> */}

//             {/* <Queue count={this.state.count} /> //-> sa class component */}

//         </div>
//     )
// }

// export default Cashier
