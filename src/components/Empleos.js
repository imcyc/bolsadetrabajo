import React from 'react';
import SidebarEmpleos from './Sidebars/SidebarEmpleos';
import Notificaciones from './Sidebars/Notificaciones';
import CajaEmpleo from './Empleos/CajaEmpleo';

const Empleos = (props) => {
  return (
    <div>
      <div className="margin-top-90"></div>
      <div className="container">
        <div className="row">
          <SidebarEmpleos/>
          <div className="col-xl-9 col-lg-8 content-left-offset">
            <h3 className="page-title">Resultados</h3>
            <Notificaciones/>
            <div className="listings-container margin-top-35">
              {props.empresas.map(empresa => (
                <CajaEmpleo key={empresa.id} id={empresa.id} logo={empresa.logo} compania={empresa.compania} titulo={empresa.titulo} descripcion={empresa.descripcion} lugar={empresa.lugar} tipo={empresa.tipo} sueldo={empresa.sueldo} tiempo={empresa.tiempo}/>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}
 
export default Empleos;