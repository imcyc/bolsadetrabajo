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
import Candidato from './components/Candidato';
import Aplicar from './components/Aplicar';
import Dashboard from './components/Dashboard';
import Configuracion from './components/Configuracion';
import PublicarEmpleo from './components/PublicarEmpleo';
import PublicarCandidato from './components/PublicarCandidato';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isShow: true,
      value: '',
      empresas: [
        {
          id: 1,
          logo: 'http://www.imcyc.com/wp-content/uploads/2017/07/logo_200.png',
          vacante:'Ingeniero Civil',
          tipoVacante: 'Tiempo completo',
          categoria: 'Ingeniero Civil',
          ubicacion: 'Avenida Corazón Fiel 102',
          ciudad: 'CDMX',
          sueldoMin: '2000',
          sueldoMax: '5000',
          estudios: 'Licenciatura',
          empresa: 'CEMEX',
          contacto: 'Julia lópez',
          descripcion: 'Se solicita ingeniero civil recién egresado para laborar en empresa especializada.',
          tiempo: '15/10/2019'
        }
      ],
      candidatos: [
        {
          id: 1,
          avatar: 'https://profilepicturesdp.com/wp-content/uploads/2018/07/profile-picture-demo.jpg',
          nombre:'Mariela Lopez Serrano',
          tipoVacante: 'Tiempo completo',
          categoria: 'Ingeniero Civil',
          ubicacion: 'Avenida Corazón Fiel 102',
          sueldoMin: '2000',
          sueldoMax: '5000',
          estudios: 'Licenciatura',
        }
      ]
    };
    this.handlePublicarEmpleo = this.handlePublicarEmpleo.bind(this);
  }

  verEmpleo = () => {
    console.log('cacatua');
  };

  callbackFunction = (childData) => {
    console.log(childData);
  };

  handlePublicarEmpleo = (event) => {
    event.preventDefault();
    const empresas = this.state.empresas.slice(0);

    empresas.push({
      id: 5,
      logo: 'http://www.imcyc.com/wp-content/uploads/2017/07/logo_200.png',
      vacante: event.target.vacante.value,
      tipoVacante: event.target.tipoVacante.value,
      categoria: event.target.categoria.value,
      ubicacion: event.target.ubicacion.value,
      ciudad: event.target.ciudad.value,
      sueldoMin: event.target.sueldoMin.value,
      sueldoMax: event.target.sueldoMax.value,
      estudios: event.target.estudios.value,
      empresa: event.target.empresa.value,
      contacto: event.target.contacto.value,
      descripcion: event.target.descripcion.value,
      tiempo: '15/10/2019'
    })

    this.setState({
      empresas: empresas,
    });
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
              render={(props) => <Empleo {...props} empresas={this.state.empresas} verEmpleo={this.verEmpleo} />}
            />
            <Route 
              exact
              path="/candidatos"
              render={(props) => <Candidatos {...props} candidatos={this.state.candidatos} />}
            />
            <Route 
              exact 
              path="/candidato/:id"
              render={(props) => <Candidato {...props} candidatos={this.state.candidatos} />}
            />
            <Route 
              exact
              path="/aplicar"
              render={(props) => <Aplicar {...props} empresas={this.state.empresas} />}
            />
            <Route 
              exact
              path="/dashboard"
              render={(props) => <Dashboard {...props} parentCallback={this.callbackFunction} candidatos={this.state.candidatos} />}
            />
            <Route 
              exact
              path="/configuracion"
              render={(props) => <Configuracion {...props} candidatos={this.state.candidatos} />}
            />
            <Route 
              exact
              path="/publicar-vacante"
              render={(props) => <PublicarEmpleo {...props} candidatos={this.state.candidatos} handlePublicarEmpleo={this.handlePublicarEmpleo} />}
            />
            <Route 
              exact
              path="/publicar-candidato"
              render={(props) => <PublicarCandidato {...props} candidatos={this.state.candidatos} />}
            />
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
