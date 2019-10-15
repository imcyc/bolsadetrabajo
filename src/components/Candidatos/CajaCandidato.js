import React from 'react';
import { Link } from "react-router-dom";

const CajaCandidato = () => {
  return(
    <div className="freelancer">
      <div className="freelancer-overview">
        <div className="freelancer-overview-inner">
          <span className="bookmark-icon"></span>
          <div className="freelancer-avatar">
            <div className="verified-badge"></div>
            <Link to="single-freelancer-profile.html"><img src="images/user-avatar-big-01.jpg" alt="" /></Link>
          </div>
        </div>
        <div className="freelancer-name">
          <h4>
            <Link to="#">Tom Smith <img className="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top" /></Link>
          </h4>
          <span>UI/UX Designer</span>
          <div className="freelancer-rating">
            <div className="star-rating" data-rating="4.9"></div>
          </div>
        </div>
      </div>
      <div className="freelancer-details">
        <div className="freelancer-details-list">
          <ul>
            <li>Ubicación <strong><i className="icon-material-outline-location-on"></i> London</strong></li>
            <li>Sueldo <strong>$60 / hr</strong></li>
            <li>Experiencia <strong>95%</strong></li>
          </ul>
        </div>
        <Link to="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">Ver Candidato <i className="icon-material-outline-arrow-right-alt"></i></Link>
      </div>
    </div>
  );
}

export default CajaCandidato;