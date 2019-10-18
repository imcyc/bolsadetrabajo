import React from 'react';
import { Link } from "react-router-dom";
import ComoFunciona from '../components/Banners/ComoFunciona';

const Login = (props) => {
  return (
    <div>
      <div className="container" style={{marginTop: '90px'}}>
        <div className="row">
          <div className="col-xl-6 offset-xl-3">
            <div className="login-register-page" style={{marginBottom: '90px'}}>

              <div className="welcome-text">
                <h3>Bienvenido!</h3>
                <h4 style={{paddingTop: '10px'}}>BOLSA DE TRABAJO DE LA INDUSTRIA DE LA CONSTRUCCIÓN</h4>
                <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
                <span>No tiene una cuenta? 
                  <Link to="/registro"> Regístrese!</Link>
                </span>
              </div>

              <form onSubmit={props.handleSignIn}>
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input type="email" name="emailaddress" className="input-text with-border" id="emailaddress" placeholder="Correo Electrónico" required/>
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input type="password" name="password" className="input-text with-border" id="password" placeholder="Contraseña" required/>
                </div>

                <button type="submit" className="button full-width button-sliding-icon ripple-effect margin-top-10" style={{backgroundColor:'#2A42E8'}}>INGRESAR <i className="icon-material-outline-arrow-right-alt"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ComoFunciona/>
    </div>
  );
}
 
export default Login;