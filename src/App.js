import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// import Login from './component/Login';
import Main from './components/Main';
import Adult from './components/Adult';
// import Contact from './component/Contact';
import Footer from './components/Footer';
import './App.css';
import Pedia from './components/Pedia';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Adult /> */}
      {/* <Pedia /> */}
      <Main />
      {/* <Contact /> */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;