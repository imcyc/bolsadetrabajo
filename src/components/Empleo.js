import React from 'react';

const Empleo = (props) => {
  console.log(props.location.empleoProps)
  return(
    <div>

      <div className="single-page-header" data-background-image="images/single-job.jpg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single-page-header-inner">
                <div className="left-side">
                  <div className="header-image">
                    <a href="single-company-profile.html">
                      <img src="http://www.imcyc.com/propuesta/wp-content/uploads/2017/07/logo_cemex.svg" alt="" style={{width: '100%'}} />
                    </a>
                  </div>
                  <div className="header-details">
                    <h3>Ingeniero Civil</h3>
                    <h5>CEMEX MÉXICO</h5>
                    <ul>
                      <li><a href="single-company-profile.html"><i className="icon-material-outline-business"></i> IMCYC</a></li>
                      <li><div className="star-rating" data-rating="4.9"></div></li>
                      <li><img className="flag" src="images/flags/gb.svg" alt="" /> Ciudad de México</li>
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
              <p style={{textAlign: 'justify'}}>La ingeniería ha sido un aspecto de la vida desde el inicio de la existencia humana. Las prácticas más tempranas de la ingeniería civil podrían haber comenzado entre el 4000 y el 2000 a. C. en el Antiguo Egipto y Mesopotamia cuando los humanos comenzaron a abandonar la existencia nómada, creando la necesidad de un cobijo. Durante este tiempo el transporte empezó a incrementar su importancia, lo que llevó al desarrollo de la rueda y de la navegación.<br/><br/>Hasta la Edad Contemporánea no hay una distinción clara entre ingeniería civil y arquitectura, y el término ingeniero y arquitecto sufrió variaciones refiriéndose a la misma persona, incluso intercambiándose.7​ La construcción de las Pirámides de Egipto entre el 2700 y el 2500 a. C. podría considerarse las primeras muestras de construcciones de gran tamaño. Otras construcciones históricas incluyen el sistema de gestión de aguas de Qanat,8​ el Partenón por Ictino en la Grecia Antigua (447-438 a. C.), la vía Apia por los ingenieros Romanos o la Gran Muralla China en el 220 a. C., o los trabajos de irrigación en Anuradhapura. De todas las civilizaciones antiguas quizás la más desarrollada en ingeniería civil fueron los romanos que fueron pioneros en la construcción de una red de calzadas, acueductos, puertos, puentes, presas y alcantarillados.</p>
            </div>
            <div className="single-page-section">
              <h3 className="margin-bottom-30">Ubicación:</h3>
              <div id="single-job-map-container">
                <div id="singleListingMap" data-latitude="51.507717" data-longitude="-0.131095" data-map-icon="im im-icon-Hamburger"></div>
                <a href="#" id="streetView">Street View</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
			      <div className="sidebar-container">
				      <a href="#small-dialog" class="apply-now-button popup-with-zoom-anim">Aplicar Ahora <i class="icon-material-outline-arrow-right-alt"></i></a>
              <div className="sidebar-widget">
                <div className="job-overview">
                  <div className="job-overview-headline">Resumen del puesto</div>
                  <div className="job-overview-inner">
                    <ul>
                      <li>
                        <i className="icon-material-outline-location-on"></i>
                        <span>Ubicación</span>
                        <h5>Ciudad de México, México</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-business-center"></i>
                        <span>Tipo</span>
                        <h5>Tiempo Completo</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-local-atm"></i>
                        <span>Sueldo</span>
                        <h5>$35k - $38k</h5>
                      </li>
                      <li>
                        <i className="icon-material-outline-access-time"></i>
                        <span>Publicado</span>
                        <h5>2 días</h5>
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
  )
}

export default Empleo;