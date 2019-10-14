import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="wrapper" className="App">
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
