import React from 'react';

const SidebarEmpleos = () => {
  return (
    <div className="col-xl-3 col-lg-4">
      <div className="sidebar-container">

        <div className="sidebar-widget">
					<h3>Ubicación:</h3>
					<div className="input-with-icon">
						<div id="autocomplete-container">
							<input id="autocomplete-input" type="text" placeholder="Su Ubicación" />
						</div>
						<i className="icon-material-outline-location-on"></i>
					</div>
				</div>

        <div className="sidebar-widget">
					<h3>Palabras clave:</h3>
					<div className="keywords-container">
						<div className="keyword-input-container">
							<input type="text" className="keyword-input" placeholder="e.g. Ingeniero Civil"/>
							<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
						</div>
						<div className="keywords-list"></div>
						<div className="clearfix"></div>
					</div>
				</div>

        <div className="sidebar-widget">
					<h3>Categoría:</h3>
					<select className="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="Todas" >
						<option>Admin Support</option>
						<option>Customer Service</option>
						<option>Data Analytics</option>
						<option>Design & Creative</option>
						<option>Legal</option>
						<option>Software Developing</option>
						<option>IT & Networking</option>
						<option>Writing</option>
						<option>Translation</option>
						<option>Sales & Marketing</option>
					</select>
				</div>

        <div className="sidebar-widget">
					<h3>Tipo:</h3>
					<div className="switches-list">
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Por Temporada</label>
						</div>
					</div>
          <div className="switches-list">
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Tiempo Completo</label>
						</div>
					</div>
          <div className="switches-list">
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Medio Tiempo</label>
						</div>
					</div>
          <div className="switches-list">
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Prácticas</label>
						</div>
					</div>
          <div className="switches-list">
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Temporal</label>
						</div>
					</div>
				</div>

        <div className="sidebar-widget">
					<h3>Sueldo:</h3>
					<div className="margin-top-55"></div>
					<input className="range-slider" type="text" value="" data-slider-currency="$" data-slider-min="1500" data-slider-max="15000" data-slider-step="100" data-slider-value="[1500,15000]"/>
				</div>

      </div>
    </div>
  );
}
 
export default SidebarEmpleos;