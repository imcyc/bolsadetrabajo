import React from 'react';
import { Link } from "react-router-dom";

const Empleos = (props) => {

  var id = parseInt(props.match.params.id);
  
  var marvelHeroes =  props.candidatos.filter((candidato) => {
    return candidato.id === id;
  });

  return (
    <div>
      {marvelHeroes.map(Heroe =>
      <div>
        <div className="single-page-header freelancer-header" data-background-image="images/single-freelancer.jpg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="single-page-header-inner">
                  <div className="left-side">
                    <div className="header-image freelancer-avatar"><img src={Heroe.avatar} alt="" /></div>
                    <div className="header-details">
                      <h3>{Heroe.nombre} <span>{Heroe.titulo}</span></h3>
                      <ul>
                        <li><div className="star-rating" data-rating="5.0"></div></li>
                        <li><img className="flag" src="images/flags/de.svg" alt="" /> {Heroe.nacionalidad}</li>
                        <li><div className="verified-badge-with-title">Verificado por el IMCYC</div></li>
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
                <h3 className="margin-bottom-25">Resumen profesional</h3>
                <p style={{textAlign: 'justify'}}>{Heroe.descripcion}</p>
              </div>
              <div className="boxed-list margin-bottom-60">
                <div className="boxed-list-headline">
                  <h3><i className="icon-material-outline-thumb-up"></i> Experiencia Profesional</h3>
                </div>
                <ul className="boxed-list-ul">
                  <li>
                    <div className="boxed-list-item">
                      <div className="item-content">
                        <h4>LABORATORIOS IMCYC <span>Pruebas de concreto</span></h4>
                        <div className="item-details margin-top-10">
                          <div className="star-rating" data-rating="5.0"></div>
                          <div className="detail-item"><i class="icon-material-outline-date-range"></i> Agosto 2015</div>
                        </div>
                        <div className="item-description">
                          <p>Excelentes resultados - Pruebas de múltiples tipos para diferentes tipos de construcción. </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="boxed-list margin-bottom-60">
                <div className="boxed-list-headline">
                  <h3><i className="icon-material-outline-business"></i> Historia Laboral</h3>
                </div>
                <ul className="boxed-list-ul">
                  <li>
                    <div className="boxed-list-item">
                      <div className="item-image">
                        <img src="images/browse-companies-03.png" alt=""/>
                      </div>
                      <div className="item-content">
                        <h4>Desarrollo en laboratorio de concreto</h4>
                        <div className="item-details margin-top-7">
                          <div className="detail-item"><a href="/"><i className="icon-material-outline-business"></i> IMCYC</a></div>
                          <div className="detail-item"><i className="icon-material-outline-date-range"></i> Mayo 2018 - Presente</div>
                        </div>
                        <div className="item-description">
                          <p>Excelentes resultados - Pruebas de múltiples tipos para diferentes tipos de construcción.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="sidebar-container">
                <div className="profile-overview">
                  <div className="overview-item"><strong>$35</strong><span>Por Hora</span></div>
                  <div className="overview-item"><strong>15 Años</strong><span>Experiencia</span></div>
                  <div className="overview-item"><strong>{Heroe.lugar}</strong><span>Ubicación</span></div>
                </div>

                <div className="sidebar-widget">
                  <div className="freelancer-indicators">
                    <div className="indicator">
                      <strong>88%</strong>
                      <div className="indicator-bar" data-indicator-percentage="88"><span></span></div>
                      <span>Evaluación IMCYC</span>
                    </div>
                    <div className="indicator">
                      <strong>100%</strong>
                      <div className="indicator-bar" data-indicator-percentage="100"><span></span></div>
                      <span>Recomendación IMCYC</span>
                    </div>
                    <div className="indicator">
                      <strong>90%</strong>
                      <div className="indicator-bar" data-indicator-percentage="90"><span></span></div>
                      <span>Registros</span>
                    </div>	
                    <div className="indicator">
                      <strong>80%</strong>
                      <div className="indicator-bar" data-indicator-percentage="80"><span></span></div>
                      <span>Experiencia</span>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3>Habilidades</h3>
                  <div className="task-tags">
                    <span>Medición</span>
                    <span>Manejo de Cilindros</span>
                    <span>Concreto</span>
                    <span>Agregados</span>
                    <span>Cemento</span>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3>CV / Documentos</h3>
                  <div className="attachments-container">
                    <a href="/" className="attachment-box ripple-effect"><span>Curriculum Vitae</span><i>PDF</i></a>
                    <a href="/" className="attachment-box ripple-effect"><span>Contrato</span><i>DOCX</i></a>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3>Contactar</h3>
                  <div className="col-xl-12">
                      <div className="submit-field">
                          <h5>Nombre:</h5>
                          <input type="text" className="with-border" />
                      </div>
                  </div>
                  <div className="col-xl-12">
                      <div className="submit-field">
                          <h5>Teléfono:</h5>
                          <input type="text" className="with-border" />
                      </div>
                  </div>
                  <div className="col-xl-12">
                      <div className="submit-field">
                          <h5>Correo Electrónico:</h5>
                          <input type="text" className="with-border" />
                      </div>
                  </div>
                  <Link to="" className="apply-now-button popup-with-zoom-anim margin-bottom-10">Contactar con candidato <i className="icon-material-outline-arrow-right-alt"></i></Link>
                </div>

                <div className="sidebar-widget">
                  <h3>Compartir Candidato</h3>
                  <button className="bookmark-button margin-bottom-25">
                    <span className="bookmark-icon"></span>
                    <span className="bookmark-text">Enviar datos de candidato</span>
                    <span className="bookmarked-text">Datos enviados</span>
                  </button>
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

export default Empleos;