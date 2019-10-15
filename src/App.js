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
      ],
      candidatos: [
        {
          id: 1,
          avatar: 'https://cdn.moneymarketing.co.uk/content/uploads/2019/08/29125853/Profile-Carl-Roberts-400x500.jpg',
          nombre:'Julio Cisneros Palacios',
          telefono: '52 554356 7578',
          email: 'jcisnero@gmail.com',
          direccion: 'Avenida Siempre Viva 43',
          experiencia: '5 Años',
          titulo:'Ingeniero Civil',
          estudios: 'Maestría',
          nacionalidad:'Mexicana',
          lugar: 'Chihuahua',
          tipo: 'Tiempo completo',
          sueldo: '$45,000-$55,000',
          tiempo: 'Hace 3 días',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Fermentum leo vel orci porta non. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Nisl condimentum id venenatis a condimentum vitae. Ac ut consequat semper viverra nam libero. Vel eros donec ac odio tempor orci dapibus ultrices in. Semper eget duis at tellus at. Arcu ac tortor dignissim convallis aenean et. Sagittis orci a scelerisque purus semper eget duis at tellus. Ipsum nunc aliquet bibendum enim facilisis. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Quisque egestas diam in arcu cursus euismod quis viverra. Tortor condimentum lacinia quis vel eros donec ac odio.'
        },
        {
          id: 2,
          avatar: 'https://profilepicturesdp.com/wp-content/uploads/2018/07/profile-picture-demo.jpg',
          nombre:'Mariela Lopez Serrano',
          telefono: '52 554356 7578',
          email: 'mlopez@gmail.com',
          direccion: 'Avenida Corazón Fiel 102',
          experiencia: '15 Años',
          titulo:'Laboratorista',
          estudios: 'Licenciatura',
          nacionalidad:'Mexicana',
          lugar: 'CDMX',
          tipo: 'Tiempo completo',
          sueldo: '$75,000-$85,000',
          tiempo: 'Hace 3 días',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Fermentum leo vel orci porta non. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Nisl condimentum id venenatis a condimentum vitae. Ac ut consequat semper viverra nam libero. Vel eros donec ac odio tempor orci dapibus ultrices in. Semper eget duis at tellus at. Arcu ac tortor dignissim convallis aenean et. Sagittis orci a scelerisque purus semper eget duis at tellus. Ipsum nunc aliquet bibendum enim facilisis. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Quisque egestas diam in arcu cursus euismod quis viverra. Tortor condimentum lacinia quis vel eros donec ac odio.'
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
