import React from 'react';
import SidebarCandidatos from './Sidebars/SidebarCandidatos';
import CajaCandidato from './Candidatos/CajaCandidato';
import Notificaciones from './Sidebars/Notificaciones';

const Candidatos = (props) => {
  return(
    <div>
      <div className="margin-top-90"></div>
      <div className="container">
        <div className="row">
          <SidebarCandidatos/>
          <div className="col-xl-9 col-lg-8 content-left-offset">
            <h3 className="page-title">Candidatos</h3>
            <Notificaciones/>
            <div className="freelancers-container freelancers-list-layout margin-top-35">
              {props.candidatos.map(candidato => (
                <CajaCandidato key={candidato.id} id={candidato.id} avatar={candidato.avatar} nombre={candidato.nombre} apellidoPaterno={candidato.apellidoPaterno} apellidoMaterno={candidato.apellidoMaterno} fechaDeNacimiento={candidato.fechaDeNacimiento} estudios={candidato.estudios} titulo={candidato.titulo} jornada={candidato.jornada} direccion={candidato.direccion} ciudad={candidato.ciudad} telefono={candidato.telefono} email={candidato.email} sueldoMin={candidato.sueldoMin} sueldoMax={candidato.sueldoMax} descripcion={candidato.descripcion}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidatos;