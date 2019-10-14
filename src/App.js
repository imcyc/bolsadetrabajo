import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Registro from './components/Registro';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="wrapper" className="App">
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
