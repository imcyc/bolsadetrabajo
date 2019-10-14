import React from 'react';
import SidebarEmpleos from './Sidebars/SidebarEmpleos';
import CajaEmpleo from './Empleos/CajaEmpleo';

const Empleos = () => {

  let empleos = [
    {
      key: 1,
      logo: 'http://www.imcyc.com/propuesta/wp-content/uploads/2017/07/logo_cemex.svg',
      compania:'CEMEX',
      titulo:'Ingeniero Civil',
      descripcion:'Se solicita ingeniero civil recién egresado para laborar en empresa especializada.',
      lugar: 'CDMX',
      tipo: 'Tiempo completo',
      sueldo: '$35,000-$38,000',
      tiempo: 'Hace 2 días'
    },
    {
      key: 2,
      logo: 'http://www.imcyc.com/propuesta/wp-content/uploads/2017/07/logo_fortaleza.svg',
      compania:'FORTALEZZA',
      titulo:'Arquitecto',
      descripcion:'Se solicita Arquitecto recién egresado para laborar en empresa especializada.',
      lugar: 'León, Guanajuato',
      tipo: 'Tiempo completo',
      sueldo: '$25,000-$30,000',
      tiempo: 'Hace 1 día'
    },
    {
      key: 3,
      logo: 'http://www.imcyc.com/propuesta/wp-content/uploads/2017/07/logo_chihuahua.svg',
      compania:'CEMENTOS CHIHUAHUA',
      titulo:'Ingeniero Estructural',
      descripcion:'Se solicita Arquitecto recién egresado para laborar en empresa especializada.',
      lugar: 'Chihuahua',
      tipo: 'Tiempo completo',
      sueldo: '$45,000-$55,000',
      tiempo: 'Hace 3 días'
    },
    {
      key: 4,
      logo: 'http://www.imcyc.com/wp-content/uploads/2017/07/logo_holcim.svg',
      compania:'HOLCIM',
      titulo:'Ingeniero Civil',
      descripcion:'Se solicita Ingeniero Civil recién egresado para laborar en empresa especializada.',
      lugar: 'Cuernavaca, Morelos',
      tipo: 'Medio completo',
      sueldo: '$25,000-$30,000',
      tiempo: 'Hace 4 días'
    }
  ]

  return (
    <div>
      <div className="margin-top-90"></div>
      <div className="container">
        <div className="row">
          <SidebarEmpleos/>
          <div className="col-xl-9 col-lg-8 content-left-offset">
            <h3 className="page-title">Resultados</h3>
            <div className="notify-box margin-top-15">
              <div className="switch-container">
                <label className="switch">
                  <input type="checkbox" />
                    <span className="switch-button"></span>
                    <span className="switch-text">Recibir alertas de correo para esta búsqueda</span>
                </label>
              </div>

              <div className="sort-by">
                <span>Ordenar por:</span>
                <select className="selectpicker hide-tick">
                  <option>Relevantes</option>
                  <option>Nuevos</option>
                  <option>Viejos</option>
                  <option>Aleatorios</option>
                </select>
              </div>
            </div>

            <div className="listings-container margin-top-35">
              {empleos.map(empleo => (
                <CajaEmpleo key={empleo.key} logo={empleo.logo} compania={empleo.compania} titulo={empleo.titulo} descripcion={empleo.descripcion} lugar={empleo.lugar} tipo={empleo.tipo} sueldo={empleo.sueldo} tiempo={empleo.tiempo}/>
              ))}
            </div>

            </div>
          </div>
        </div>
      </div>
  );
}
 
export default Empleos;