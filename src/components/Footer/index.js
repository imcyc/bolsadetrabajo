import React from 'react';
import { Link } from "react-router-dom";
import logoblanco from '../../logo-blanco.svg';

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-top-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-rows-container">
                <div className="footer-rows-left">
                  <div className="footer-row">
                    <div className="footer-row-inner footer-logo">
                      <img src={logoblanco} alt="imcyc" title="imcyc" style={{width: '150px'}} />
                    </div>
                  </div>
                </div>
                <div className="footer-rows-right">
                  <div className="footer-row">
                    <div className="footer-row-inner">
                      <ul className="footer-social-links">
                        <li>
                          <Link to="/" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
                            <i className="icon-brand-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" title="Twitter" data-tippy-placement="bottom" data-tippy-theme="light">
                            <i className="icon-brand-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" title="Google Plus" data-tippy-placement="bottom" data-tippy-theme="light">
                            <i className="icon-brand-google-plus-g"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" title="LinkedIn" data-tippy-placement="bottom" data-tippy-theme="light">
                            <i className="icon-brand-linkedin-in"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-row">
                    <div className="footer-row-inner">
                      <select className="selectpicker language-switcher" data-selected-text-format="count" data-size="5">
                        <option value="Espanol">Español</option>
                        <option value="English">English</option>
                        <option value="Français">Français</option>
                      </select>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              © 2019 <strong>Instituto Mexicano del Cemento y del Concreto A.C.</strong>. Todo Los Derechos Reservados.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;