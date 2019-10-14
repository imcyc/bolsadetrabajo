import React from 'react';
import SidebarCandidatos from './Sidebars/SidebarCandidatos';
import CajaCandidato from './Candidatos/CajaCandidato';
import Notificaciones from './Sidebars/Notificaciones';

const Candidatos = () => {
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
              <CajaCandidato/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidatos;