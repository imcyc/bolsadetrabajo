import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

const Header = () => {
  return (
    <header id="header-container" class="fullwidth">
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
                <Link to="/empleos">EMPLEOS</Link>
              </li>
              <li>
                <Link to="#">CANDIDATOS</Link>
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
                <Link to="#"><i class="icon-feather-bell"></i><span>4</span></Link>
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
                <Link to="#"><i class="icon-feather-mail"></i><span>3</span></Link>
              </div>
            </div>
          </div>

          <div className="header-widget">
            <div className="header-notifications user-menu">
              <div className="header-notifications-trigger">
                <Link to="#">
                  <div className="user-avatar status-online">
                    <img src="images/user-avatar-small-01.jpg" alt="" />
                  </div>
                </Link>
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