import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';
import Adult from './components/Adult';
// import Contact from './component/Contact';
import Footer from './components/Footer';
import './App.css';
import Pedia from './components/Pedia';
import Cashier from './components/Cashier';
import Er from './components/ER';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Adult /> */}
      {/* <Pedia /> */}
      {/* <Cashier /> */}
      {/* <Er /> */}
      {/* <Main /> */}
      {/* <Contact /> */}
      {/* <Login /> */}

      <Router>
        <Switch>
          <Route path="/cashier">
            <Cashier />
          </Route>
          <Route path="/emergency">
            <Er />
          </Route>
          <Route path="/pedia">
            <Pedia />
          </Route>
          <Route path="/adult">
            <Adult />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;