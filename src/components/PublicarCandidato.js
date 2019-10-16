import React from 'react';
import { Link } from "react-router-dom";
import DashboardSidebarEmpresa from './Dashboard/DashboardSidebarEmpresa';

const PublicarCandidato = (props) => {

    function sayHello() {
        props.parentCallback("Hey Popsie, How’s it going?");
    }

    return(
        <div className="dashboard-container">
            
            <DashboardSidebarEmpresa sayHello={sayHello}/>

            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner" style={{marginBottom: '50px'}}>
                    <div className="dashboard-headline">
                        <h3>Nuevo Perfil</h3>
                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><Link to="/dashboard">Home</Link></li>
                                <li><Link to="/dashboard">Panel de control</Link></li>
                                <li>Publicar perfil de candidato</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="dashboard-box margin-top-0">
                                <div className="headline">
                                    <h3>
                                        <i className="icon-feather-folder-plus"></i> 
                                        Publicar perfil de candidato
                                    </h3>
                                </div>
                                <div className="content with-padding padding-bottom-10">
                                    <div className="row">

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Nombre(s):</h5>
                                                <input type="text" className="with-border" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Apellido Paterno:</h5>
                                                <input type="text" className="with-border" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Apellido Materno:</h5>
                                                <input type="text" className="with-border" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Fecha de Nacimiento:</h5>
                                                <input type="date" className="with-border" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Último nivel de estudios:</h5>
                                                <select data-size="7" title="Select Job Type">
                                                    <option>Técnico</option>
                                                    <option>Licenciatura</option>
                                                    <option>Maestría</option>
                                                    <option>Doctorado</option>
                                                    <option>Otro</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Título Profesional:</h5>
                                                <select data-size="7" title="Categoría" >
                                                <option value="Ingeniero Civil">Ingeniero Civil</option>
                                                <option value="Ingeniero Estructural">Ingeniero Estructural</option>
                                                <option value="Laboratorista de concreto">Laboratorista de concreto</option>
                                                <option value="Arquitecto">Arquitecto</option>
                                                <option value="Dibujante">Dibujante</option>
                                                <option value="Técnico de Mantenimiento">Técnico de Mantenimiento</option>
                                                <option value="Supervisor de Obra">Supervisor de Obra</option>
                                                <option value="Operador de Maquinaria">Operador de Maquinaria</option>
                                                <option value="Chofer de revolvedora">Chofer de revolvedora</option>
                                            </select>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Tipo de jornada:</h5>
                                                <select data-size="7" title="Select Job Type">
                                                    <option>Por Temporada</option>
                                                    <option>Tiempo Completo</option>
                                                    <option>Medio Tiempo</option>
                                                    <option>Prácticas Profesionales</option>
                                                    <option>Temporal</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Dirección:</h5>
                                                <div className="input-with-icon">
                                                    <div id="autocomplete-container">
                                                        <input id="autocomplete-input" className="with-border" type="text" placeholder="Dirección" />
                                                    </div>
                                                    <i className="icon-material-outline-location-on"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Teléfono:</h5>
                                                <input type="text" className="with-border" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Correo Electrónico:</h5>
                                                <input type="text" className="with-border" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Sueldo deseado:</h5>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="input-with-icon">
                                                            <input className="with-border" type="text" placeholder="Min"/>
                                                            <i className="currency">MX</i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="input-with-icon">
                                                            <input className="with-border" type="text" placeholder="Max"/>
                                                            <i className="currency">MX</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="submit-field">
                                                <h5>Descripción de habilidades y/o experiencia:</h5>
                                                <textarea cols="30" rows="5" className="with-border"></textarea>
                                                <div className="uploadButton margin-top-30">
                                                    <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple/>
                                                    <label className="uploadButton-button ripple-effect" htmlFor="upload">Subir Archivo</label>
                                                    <span className="uploadButton-file-name">Imágenes o documentos que describan la vacante.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <Link to='/dashboard' className="button ripple-effect big margin-top-10 margin-bottom-10">
                                                <i className="icon-feather-plus"></i> Publicar Perfil
                                            </Link>
                                        </div>

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

export default PublicarCandidato;