import React from 'react';
import { Link } from "react-router-dom";

const CajaEmpleo = (props) => {
  return(
    <div>
      <Link to={{
        pathname: '/empleo',
        empleoProps:{
          logo: props.logo,
          compania: props.compania,
          descripcion: props.descripcion
        }
      }} class="job-listing">
        <div className="job-listing-details">
          <div className="job-listing-company-logo">
            <img src={props.logo} alt={props.titulo} />
          </div>
          <div className="job-listing-description">
            <h4 className="job-listing-company">{props.compania}</h4>
            <h3 className="job-listing-title">{props.titulo}</h3>
            <p className="job-listing-text">{props.descripcion}</p>
          </div>
          <span className="bookmark-icon"></span>
        </div>
        <div className="job-listing-footer">
          <ul>
            <li><i className="icon-material-outline-location-on"></i> {props.lugar}</li>
            <li><i className="icon-material-outline-business-center"></i> {props.tipo}</li>
            <li><i className="icon-material-outline-account-balance-wallet"></i> {props.sueldo}</li>
            <li><i className="icon-material-outline-access-time"></i> {props.tiempo}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
 
export default CajaEmpleo;