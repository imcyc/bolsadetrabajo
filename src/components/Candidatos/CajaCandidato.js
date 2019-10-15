import React from 'react';
import { Link } from "react-router-dom";

const CajaCandidato = (props) => {
  return(
    <Link
        id={props.id}
        to={{
          pathname: `/candidato/${props.id}`
        }}
        className="job-listing"
      >
    <div className="freelancer">
      <div className="freelancer-overview">
        <div className="freelancer-overview-inner">
          <span className="bookmark-icon"></span>
          <div className="freelancer-avatar">
            <div className="verified-badge"></div>
            <Link to="single-freelancer-profile.html"><img src={props.avatar} alt="" /></Link>
          </div>
        </div>
        <div className="freelancer-name">
          <h4>
            <Link to={{pathname: `/candidato/${props.id}`}}>{props.nombre} <img className="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top" /></Link>
          </h4>
          <span>{props.titulo}</span>
          <div className="freelancer-rating">
            <div className="star-rating" data-rating="4.9"></div>
          </div>
        </div>
      </div>
      <div className="freelancer-details">
        <div className="freelancer-details-list">
          <ul>
            <li>Ubicación <strong><i className="icon-material-outline-location-on"></i> {props.lugar}</strong></li>
            <li>Sueldo <strong>{props.sueldo}</strong></li>
            <li>Experiencia <strong>{props.experiencia}</strong></li>
          </ul>
        </div>
        <Link to={{pathname: `/candidato/${props.id}`}} className="button button-sliding-icon ripple-effect">Ver Candidato <i className="icon-material-outline-arrow-right-alt"></i></Link>
      </div>
    </div>
    </Link>
  );
}

export default CajaCandidato;