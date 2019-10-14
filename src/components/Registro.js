import React from 'react';
import TituloBarra from './Banners/TituloBarra';
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div>
      <TituloBarra titulo="Registro"/>

      <div className="container">
        <div className="row">
          <div className="col-xl-5 offset-xl-3">
            <div className="login-register-page" style={{marginBottom: '90px'}}>

              <div className="welcome-text">
                <h3 styleName="font-size: 26px;">Por Favor Cree su cuenta!</h3>
                <span>Ya tiene una cuenta? 
                  <Link to="/login"> Ingresar!</Link>
                </span>
              </div>

              <div className="account-type">
                <div>
                  <input type="radio" name="account-type-radio" id="freelancer-radio" className="account-type-radio" checked/>
                  <label for="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> CANDIDATO</label>
                </div>
                <div>
                  <input type="radio" name="account-type-radio" id="employer-radio" className="account-type-radio"/>
                  <label for="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i> EMPRESA</label>
                </div>
              </div>

              <form method="post" id="register-account-form">
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input type="text" className="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Correo Electrónico" required/>
                </div>
                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input type="password" className="input-text with-border" name="password-register" id="password-register" placeholder="Contraseña" required/>
                </div>
                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repetir Contraseña" required/>
                </div>

                <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">Registro <i className="icon-material-outline-arrow-right-alt"></i></button>
              </form>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
 
export default Registro;