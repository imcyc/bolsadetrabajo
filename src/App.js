import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Registro from './components/Registro';
import Empleos from './components/Empleos';
import Empleo from './components/Empleo';
import Candidatos from './components/Candidatos';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isShow: true,
      empresas: [
        {
          id: 1,
          logo: 'http://www.imcyc.com/propuesta/wp-content/uploads/2017/07/logo_cemex.svg',
          compania:'CEMEX',
          titulo:'Ingeniero Civil',
          descripcion:'Se solicita ingeniero civil recién egresado para laborar en empresa especializada.',
          lugar: 'CDMX',
          tipo: 'Tiempo completo',
          sueldo: '$35,000-$38,000',
          tiempo: 'Hace 2 días'
        },
        {
          id: 2,
          logo: 'http://www.imcyc.com/propuesta/wp-content/uploads/2017/07/logo_fortaleza.svg',
          compania:'FORTALEZZA',
          titulo:'Arquitecto',
          descripcion:'Se solicita Arquitecto recién egresado para laborar en empresa especializada.',
          lugar: 'León, Guanajuato',
          tipo: 'Tiempo completo',
          sueldo: '$25,000-$30,000',
          tiempo: 'Hace 1 día'
        },
        {
          id: 3,
          logo: 'http://www.imcyc.com/propuesta/wp-content/uploads/2017/07/logo_chihuahua.svg',
          compania:'CEMENTOS CHIHUAHUA',
          titulo:'Ingeniero Estructural',
          descripcion:'Se solicita Arquitecto recién egresado para laborar en empresa especializada.',
          lugar: 'Chihuahua',
          tipo: 'Tiempo completo',
          sueldo: '$45,000-$55,000',
          tiempo: 'Hace 3 días'
        }
      ]
    };
  }

  addEmpresas = () => {
    // create a clone of your array of players; don't modify objects on the state directly
    const empresas = this.state.empresas.slice(0);
  
    empresas.push(
      {
        id: 12,
        logo: 'http://www.imcyc.com/propuesta/wp-content/uploads/2017/07/logo_fortaleza.svg',
        compania:'FORTALEZZA',
        titulo:'Arquitecto',
        descripcion:'Se solicita Arquitecto recién egresado para laborar en empresa especializada.',
        lugar: 'León, Guanajuato',
        tipo: 'Tiempo completo',
        sueldo: '$25,000-$30,000',
        tiempo: 'Hace 1 día'
      }
    );
  
    this.setState({
      empresas: empresas,
    });
  };

  verEmpleo = () => {
    console.log('cacatua');
  }

  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div id="wrapper" className="App">
          <Header/>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/registro" component={Registro} />
            <Route 
              exact
              path="/empleos"
              render={(props) => <Empleos {...props} empresas={this.state.empresas} addEmpresas={this.addEmpresas} />}
            />
            <Route 
              exact 
              path="/empleo/:id"
              component={Empleo} 
              render={(props) => <Empleo {...props} verEmpleo={this.verEmpleo} />}
            />
            <Route exact path="/candidatos" component={Candidatos} />
            <Route 
              exact
              path="/"
              component={Home}
            />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
