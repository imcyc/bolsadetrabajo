import React from 'react';

const Notificaciones = () => {
  return (
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
  );
}

export default Notificaciones;