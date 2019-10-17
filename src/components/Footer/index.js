import React from 'react';
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
                        
                    </div>
                  </div>
                  <div className="footer-row">
                    <div className="footer-row-inner">
                      
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