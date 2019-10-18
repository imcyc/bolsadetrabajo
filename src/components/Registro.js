import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Registro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "registroUsuario",
      registrado: this.props.registrado
    }
  }

  tipoRegistro = (event) => {
    this.setState({ title: event.target.value });
  };

  render(){
    return (
      <div>
        <div className="container" style={{marginTop: '90px'}}>
          <div className="row">
            <div className="col-xl-5 offset-xl-3">
              <div className="login-register-page" style={{marginBottom: '90px'}}>
  
                <div className="welcome-text">
                  <h3 style={{fontSize: '26px'}}>Por Favor Cree su cuenta!</h3>
                  <h4 style={{paddingTop: '10px'}}>BOLSA DE TRABAJO DE LA INDUSTRIA DE LA CONSTRUCCIÓN</h4>
                  <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
                  <span>Ya tiene una cuenta? 
                    <Link to="/"> Ingresar!</Link>
                  </span>
                </div>

                <div className="welcome-text" style={{display: this.props.registrado ? 'block' : 'none'}}>
                  <h1>Bienvenido!</h1>
                  <Link to="/candidatos" className="button ripple-effect margin-top-30" style={{width: '100%'}}>CANDIDATOS <i className="icon-material-outline-arrow-right-alt"></i></Link>
                </div>
  
                <div className="account-type" style={{display: this.props.registrado ? 'none' : 'flex'}}>
                  <div>
                    <input type="radio" name="account-type-radio" value="registroUsuario" id="freelancer-radio" className="account-type-radio" defaultChecked onClick={this.tipoRegistro}/>
                    <label htmlFor="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> CANDIDATO</label>
                  </div>
                  <div>
                    <input type="radio" name="account-type-radio" value="registroEmpresa" id="employer-radio" className="account-type-radio" onClick={this.tipoRegistro}/>
                    <label htmlFor="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i> EMPRESA</label>
                  </div>
                </div>
  
                { 
                  (this.state.title === 'registroUsuario') ? 
                    <form onSubmit={this.props.handleRegistro} style={{display: this.props.registrado ? 'none' : 'block'}}>
                      <div className="input-with-icon-left">
                        <i className="icon-material-baseline-mail-outline"></i>
                        <input type="email" className="input-text with-border" name="emailaddress" id="emailaddress-register" placeholder="Correo Electrónico"/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-outline-lock"></i>
                        <input type="password" className="input-text with-border" name="password" id="password-register" placeholder="Contraseña"/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-outline-lock"></i>
                        <input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repetir Contraseña"/>
                      </div>
      
                      <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" >REGISTRO <i className="icon-material-outline-arrow-right-alt"></i></button>
                    </form>
                  :
                    <form onSubmit={this.props.handleRegistro} style={{display: this.props.registrado ? 'none' : 'block'}}>
                      <div className="input-with-icon-left">
                        <i className="icon-material-baseline-mail-outline"></i>
                        <input type="text" className="input-text with-border" name="empresa" id="empresa-register" placeholder="Nombre de la empresa"/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-baseline-mail-outline"></i>
                        <input type="email" className="input-text with-border" name="emailaddress" id="emailaddress-register" placeholder="Correo Electrónico"/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-outline-lock"></i>
                        <input type="password" className="input-text with-border" name="password" id="password-register" placeholder="Contraseña"/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-baseline-phone"></i>
                        <input type="text" className="input-text with-border" name="telefono" id="telefono-register" placeholder="Teléfono"/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-outline-lock"></i>
                        <input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repetir Contraseña"/>
                      </div>
      
                      <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" >REGISTRO <i className="icon-material-outline-arrow-right-alt"></i></button>
                    </form>
                }
              </div>

            </div>
          </div>
        </div>
  
  
      </div>
    );
  }

  
}
 
export default Registro;