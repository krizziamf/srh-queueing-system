const express = require("express");
// const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4000;
const index = require("./app");

const app = express();
// app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let cashierCount = 0;
let pediaCount = 0;
let adultCount = 0;
let emergencyCount = 0;

let cashierInterval;
let pediaInterval;
let adultInterval;
let emergencyInterval;

io.on("connection", (socket) => {
    console.log("New client connected");
    if (cashierInterval) {
        clearInterval(cashierInterval);
    }

    if (pediaInterval) {
        clearInterval(pediaInterval);
    }

    if(adultInterval) {
        clearInterval(adultInterval);
    }

    if(emergencyInterval) {
        clearInterval(emergencyInterval);
    }

    //cashier
    cashierInterval = setInterval(() => getCashierCountAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        clearInterval(cashierInterval);
    });

    //pedia
    pediaInterval = setInterval(() => getPediaCountAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        clearInterval(pediaInterval);
    });

    //adult
    adultInterval = setInterval(() => getAdultCountAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        clearInterval(adultInterval);
    });

    //emergency
    emergencyInterval = setInterval(() => getEmergencyCountAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        clearInterval(emergencyInterval);
    });
});

const getCashierCountAndEmit = socket => {
    // console.log(cashierCount);
    socket.emit("FromCashier", cashierCount);
};

const getPediaCountAndEmit = socket => {
    // console.log(cashierCount);
    socket.emit("FromPedia", pediaCount);
};

const getAdultCountAndEmit = socket => {
    socket.emit("FromAdult", adultCount);
};

const getEmergencyCountAndEmit = socket => {
    socket.emit("FromEmergency", emergencyCount);
}


app.post('/cashier', (req,res) => {
    console.log(req.body.count);
    cashierCount = req.body.count;
    res.send("GOT THE DATA FROM CASHIER COMPONENT");
});

app.post('/pedia', (req,res) => {
    console.log(req.body.count);
    pediaCount = req.body.count;
    res.send("GOT THE DATA FROM PEDIA COMPONENT");
});

app.post('/adult', (req,res) => {
    adultCount = req.body.count;
    res.send("GOT THE DATA FROM ADULT COMPONENT");
});

app.post('/emergency', (req,res) => {
    emergencyCount = req.body.count;
    res.send("GOT THE DATA FROM EMERGENCY COMPONENT");
})


server.listen(port, () => console.log(`Listening on port ${port}`));
