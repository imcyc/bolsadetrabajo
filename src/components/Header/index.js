import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

const Header = () => {
  return (
    <header id="header-container" className="fullwidth">
    <div id="header">
      <div className="container">
        <div className="left-side">
          <div id="logo">
            <Link to="/"><img src={logo} alt=""/></Link>
          </div>
          <nav id="navigation">
					  <ul id="responsive">
              <li>
                <Link to="/" className="current">INICIO</Link>
              </li>
              <li>
                <Link to="/empleos">OFERTAS DE EMPLEO</Link>
                <ul className="dropdown-nav">
                  <li>
                    <Link to="/publicar-vacante">PUBLICAR EMPLEO</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/candidatos">CANDIDATOS</Link>
                <ul className="dropdown-nav">
                  <li>
                    <Link to="/publicar-candidato">PUBLICAR CANDIDATO</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/registro">REGISTRO</Link>
              </li>
            </ul>
          </nav>
          <div className="clearfix"></div>
        </div>
        <div className="right-side">
          <div className="header-widget hide-on-mobile">
            <div className="header-notifications">
              <div className="header-notifications-trigger">
                <Link to="#"><i className="icon-feather-bell"></i><span>4</span></Link>
              </div>
              <div className="header-notifications-dropdown">
                <div className="header-notifications-headline">
                  <h4>Notificaciones</h4>
                  <button className="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
                    <i className="icon-feather-check-square"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="header-notifications">
              <div className="header-notifications-trigger">
                <Link to="#"><i className="icon-feather-mail"></i><span>3</span></Link>
              </div>
            </div>
          </div>
          <div className="header-widget">
            <div className="header-notifications user-menu">
              <div className="header-notifications-trigger">
                <Link to="#">
                  <div className="user-avatar status-online">
                    <img src="https://www.quantilia.com/wp-content/themes/quantilia/images/image55.png" alt="" />
                  </div>
                </Link>
              </div>
              
              <div className="header-notifications-dropdown">
                <div className="user-status">
                  <div className="user-details">
                    <div className="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""/></div>
                    <div className="user-name">
                      Juan Gallardo <span>Ingeniero Civil</span>
                    </div>
                  </div>
                  <div className="status-switch" id="snackbar-user-status">
                    <label className="user-online current-status">En Linea</label>
                    <label className="user-invisible">Invisible</label>
                    <span className="status-indicator" aria-hidden="true"></span>
                  </div>	
                </div>
                <ul className="user-menu-small-nav">
                  <li>
                    <Link to="/dashboard">
                      <i className="icon-material-outline-dashboard"></i> Panel de control
                    </Link>
                  </li>
                  <li>
                    <Link to="/configuracion">
                      <i className="icon-material-outline-settings"></i> Configuracion
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="icon-material-outline-power-settings-new"></i> Salir
                    </Link>
                  </li>
                </ul>
              </div>




              
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
}
 
export default Header;