import React from 'react';
import TituloBarra from './Banners/TituloBarra';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <TituloBarra titulo="Login de Usuario" ruta="LOGIN"/>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 offset-xl-3">
            <div className="login-register-page" style={{marginBottom: '90px'}}>

              <div className="welcome-text">
                <h3>Bienvenido!</h3>
                <span>No tiene una cuenta? 
                  <Link to="/registro"> Regístrese!</Link>
                </span>
              </div>

              <form method="post" id="login-form">
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Correo Electrónico" required/>
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input type="password" className="input-text with-border" name="password" id="password" placeholder="Contraseña" required/>
                </div>
                <Link to="#" className="forgot-password">Olvidó su contraseña?</Link>
              </form>
              
              <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Ingresar <i className="icon-material-outline-arrow-right-alt"></i></button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Login;