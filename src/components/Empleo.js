import React from 'react';

const Empleo = (props) => {

  var id = parseInt(props.match.params.id);
  
  var marvelHeroes =  props.empresas.filter((empresa) => {
    return empresa.id === id;
  });

  return(
    
    <div>
      {marvelHeroes.map(Heroe =>
      <div>
        <div className="single-page-header" data-background-image="images/single-job.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single-page-header-inner">
                <div className="left-side">
                  <div className="header-image">
                    <a href="single-company-profile.html">
                      <img src={Heroe.logo} alt="" style={{width: '100%'}} />
                    </a>
                  </div>
                  <div className="header-details">
                    <h3>{Heroe.titulo}</h3>
                    <h5>{Heroe.compania}</h5>
                    <ul>
                      <li><a href="single-company-profile.html"><i className="icon-material-outline-business"></i> {Heroe.lugar}</a></li>
                      <li><div className="star-rating" data-rating="4.9"></div></li>
                      <li><img className="flag" src="images/flags/gb.svg" alt="" /> {Heroe.tipo}</li>
                      <li><div className="verified-badge-with-title">Verificado por IMCYC</div></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 content-right-offset">
            <div className="single-page-section">
              <h3 className="margin-bottom-25">Descripción del puesto:</h3>
              <p style={{textAlign: 'justify'}}>{Heroe.descripcion}</p>
            </div>
            <div className="single-page-section">
              <h3 className="margin-bottom-30">Ubicación:</h3>
              <div id="single-job-map-container">
                <div id="singleListingMap" data-latitude="51.507717" data-longitude="-0.131095" data-map-icon="im im-icon-Hamburger"></div>
                <a href="/" id="streetView">Vista de calle</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
			      <div className="sidebar-container">
				      <a href="#small-dialog" className="apply-now-button popup-with-zoom-anim">Aplicar Ahora <i className="icon-material-outline-arrow-right-alt"></i></a>
              <div className="sidebar-widget">
                <div className="job-overview">
                  <div className="job-overview-headline">Resumen del puesto</div>
                  <div className="job-overview-inner">
                    <ul>
                      <li>
                        <i className="icon-material-outline-location-on"></i>
                        <span>Ubicación</span>
                        <h5>{Heroe.lugar}</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-business-center"></i>
                        <span>Tipo</span>
                        <h5>{Heroe.tipo}</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-local-atm"></i>
                        <span>Sueldo</span>
                        <h5>{Heroe.sueldo}</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-access-time"></i>
                        <span>Publicado</span>
                        <h5>{Heroe.tiempo}</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      )}
    </div>
  )
}

export default Empleo;