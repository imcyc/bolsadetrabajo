import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
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
      registrado: false,
      user: null,
      persons: [],
      empresas: [],
      candidatos: [],
      filtrados: [],
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
    
    axios.get(`http://18.219.47.222/apis/bolsadetrabajo/empresas.php`)
      .then(res => {
        const empresas = res.data;
        this.setState({ empresas });
      })

    console.log(this.state.user);
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

  filtroCiudad = (e) => {
    console.log(e.target.value);
    const ciudad = e.target.value;
    const candidatos = this.state.candidatos.filter(candidato => candidato.ciudad === ciudad);
    this.setState({
      filtrados: candidatos
    })
    console.log(this.state.filtrados);
  }

  handlePublicarEmpleo = (event) => {
    event.preventDefault();

    const empresa = {
      logo: 'http://www.imcyc.com/wp-content/uploads/2017/07/logo_200.png',
      vacante: event.target.vacante.value,
      tipoVacante: event.target.tipoVacante.value,
      categoria: event.target.categoria.value,
      ubicacion: event.target.ubicacion.value,
      ciudad: event.target.ciudad.value,
      sueldoMin: event.target.sueldoMin.value,
      sueldoMax: event.target.sueldoMax.value,
      estudio: event.target.estudio.value,
      empresa: event.target.empresa.value,
      contacto: event.target.contacto.value,
      descripcion: event.target.descripcion.value,
      tiempo: '15/10/2019',
      telefono: event.target.telefono.value,
      email: event.target.email.value
    }

    console.log(empresa);

    axios.post(`http://18.219.47.222/apis/bolsadetrabajo/insertempresa.php`, { empresa })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    axios.get(`http://18.219.47.222/apis/bolsadetrabajo/empresas.php`)
      .then(res => {
        const candidatos = res.data;
        this.setState({ candidatos });
      })

    window.scrollTo(0, 0);
    alert('OFERTA AGREGADA CON ÉXITO!!!')
  }

  handlePublicarCandidato = (event) => {
    event.preventDefault();

    const candidato = {
        avatar: 'https://image.flaticon.com/icons/png/512/64/64572.png',
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

      
    window.scrollTo(0, 0);
    alert('CANDIDATO AGREGADO CON ÉXITO!!!')
  }

  handleSignIn = (event) => {
    event.preventDefault();
    let emailaddress = event.target.emailaddress.value;
    let password = event.target.password.value;
    this.setState({
      user: {
        emailaddress,
        password
      }
    })

    console.log(this.state.user);
  }

  handleRegistro = (event) => {
    event.preventDefault();
    let emailaddress = event.target.emailaddress.value;
    let password = event.target.password.value;
    this.setState({
      user: {
        emailaddress,
        password
      },
      registrado: true
    })
    console.log(this.state.user);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  signOut() {
    this.setState({user: null})
  }

  render(){
    return (
      <HashRouter basename='/'>
        <div id="wrapper" className="App">
          <Header user={this.state.user}/>
          <Switch>
            <Route 
              exact 
              path="/login" 
              render={(props) => <Login {...props} handleSignIn={this.handleSignIn} />}
            />
            
            <Route 
              exact 
              path="/registro" 
              render={(props) => <Registro {...props}
                handleRegistro={this.handleRegistro}
                registrado={this.state.registrado}
                usuario={this.state.user}
                />}
            />
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
              render={(props) => <Candidatos {...props} 
                filtrados={this.state.filtrados}
                candidatos={this.state.candidatos}
                filtroCiudad={this.filtroCiudad}  
                />}
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
              render={(props) => <Login {...props} handleSignIn={this.handleSignIn} />}
            />
          </Switch>
          
          <Footer/>
        </div>
      </HashRouter>
    );
  }
}

export default withRouter(App);
