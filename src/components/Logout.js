import React from 'react';
import { Link } from "react-router-dom";

const Logout = (props) => {
  return (
    <div style={{height: '85vh'}}>
      <div className="container" style={{marginTop: '90px'}}>
        <div className="row">
          <div className="col-xl-6 offset-xl-3">
            <div className="login-register-page" style={{marginBottom: '90px'}}>
              <div className="welcome-text">
                <h3>Gracias Por Visitarnos!</h3>
                <h4 style={{paddingTop: '10px'}}>BOLSA DE TRABAJO DE LA INDUSTRIA DE LA CONSTRUCCIÓN</h4>
                <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
                <span>Ya tiene una cuenta? 
                  <Link to="/login"> Ingresar!</Link>
                </span>
                <span>No tiene una cuenta? 
                  <Link to="/registro"> Regístrese!</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
   
export default Logout;