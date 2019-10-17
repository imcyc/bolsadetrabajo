import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Switch } from "react-router-dom";
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
      persons: [],
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
          tiempo: '15/10/2019',
          telefono: '(55) 5322 5740',
          email: 'imcyc@imcyc.com'
        }
      ],
      candidatos: [],
      nombre: '',
      email: '',
      password: '',
    };
    this.handlePublicarEmpleo = this.handlePublicarEmpleo.bind(this);
  }

  componentDidMount() {
    axios.get(`http://18.219.47.222/apis/bolsadetrabajo/candidatos.php`)
      .then(res => {
        const candidatos = res.data;
        this.setState({ candidatos });
      })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      nombre: this.state.nombre,
      email: this.state.email,
      password: this.state.password
    };

    axios.post(`http://18.219.47.222/apis/bolsadetrabajo/insertuser.php`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    axios.get(`http://18.219.47.222/apis/bolsadetrabajo/candidatos.php`)
      .then(res => {
        const candidatos = res.data;
        this.setState({ candidatos });
      })
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
    const idex = Math.floor((Math.random() * 100) + 1);

    empresas.push({
      id: idex,
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
      tiempo: '15/10/2019',
      telefono: event.target.telefono.value,
      email: event.target.email.value
    })

    this.setState({
      empresas: empresas,
    });

    window.location.href = "#/empleos";
  }

  handlePublicarCandidato = (event) => {
    event.preventDefault();

    const candidato = {
        avatar: 'http://www.imcyc.com/wp-content/uploads/2017/07/logo_200.png',
        nombre: event.target.nombre.value,
        apellidoPaterno: event.target.apellidoPaterno.value,
        apellidoMaterno: event.target.apellidoMaterno.value,
        fechaDeNacimiento: event.target.fechaDeNacimiento.value,
        estudios: event.target.estudios.value,
        titulo: event.target.titulo.value,
        jornada: event.target.jornada.value,
        direccion: event.target.direccion.value,
        ciudad: event.target.ciudad.value,
        telefono: event.target.telefono.value,
        email: event.target.email.value,
        sueldoMin: event.target.sueldoMin.value,
        sueldoMax: event.target.sueldoMax.value,
        descripcion: event.target.descripcion.value,
    };

    console.log(candidato);

    axios.post(`http://18.219.47.222/apis/bolsadetrabajo/insertcandidato.php`, { candidato })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    axios.get(`http://18.219.47.222/apis/bolsadetrabajo/candidatos.php`)
      .then(res => {
        const candidatos = res.data;
        this.setState({ candidatos });
      })

    //xwindow.location.href = "#/candidatos";
  }

  render(){
    return (
      <HashRouter basename='/'>
        <div id="wrapper" className="App">
          <Header/>
    {/*
          <form onSubmit={this.handleSubmit} style={{marginTop: '90px', background: '#333333'}}>
            <label>
              Person Name:
              <input type="text" name="nombre" onChange={this.handleChange} />
              <input type="text" name="email" onChange={this.handleChange} />
              <input type="text" name="password" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </form>
          <ul>
            { this.state.candidatos.map(candidato => <li>{candidato.nombre}</li>)}
          </ul>
    */}
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
              render={(props) => <PublicarEmpleo {...props} 
              candidatos={this.state.candidatos} 
              handlePublicarEmpleo={this.handlePublicarEmpleo} />}
            />
            <Route 
              exact
              path="/publicar-candidato"
              render={(props) => <PublicarCandidato {...props} 
              candidatos={this.state.candidatos}
              handlePublicarCandidato={this.handlePublicarCandidato} />}
            />
            <Route 
              exact
              path="/"
              component={Home}
            />
          </Switch>
          
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
