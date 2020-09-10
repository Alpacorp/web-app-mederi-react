import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/universal.css';
import '../styles/schedule.css';
import doctoraMaria from '../assets/doctora.png';
import doctorSaul from '../assets/doctor-profile.png';
import doctorLuis from '../assets/doctor-luis.png';

export const Schedule = ()=>{
    return (
        <section className="schedule">
            <section className="title">
                <div className="title__text">
                    <h2>Sigue estos pasos para obtener tu cita médica</h2>
                </div>
                <div className="title__steps">
                    <ol>
                        <li>
                            <p>Elige el profesional y horario de acuerdo a tu disponibilidad.</p>
                        </li>
                        <li>
                            <p>Reserva tu cita y cancela en línea.</p>
                        </li>
                        <li>
                            <p>Ten presente que si deseas cancelar una cita deberás hacerlo con una hora de anticipación para generar la reprogramación sin recargos adicionales.</p>
                        </li>
                    </ol>
                </div>
            </section>
            <hr className="hr"/>
            <section className="doctor">
                <div className="doctor__description">
                    <div className="description">
                        <div className="description__img">
                            <figure>
                                <img src={doctorSaul} alt="profile-doctor"/>
                            </figure>
                        </div>
                        <div className="description__first">
                            <h3 className="description__first-name"><a href="/doctor"><i className="fas fa-stethoscope"></i>Dr. Saúl Humberto Díaz Ferrerira</a></h3>
                            <h4 className="description__first-ocupation">Medico General | Oftalmólogo</h4>
                            <div className="description__calification">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="doctor__services">
                        <h3 className="doctor__services-text">Servicios disponibles:</h3>
                        <ul>
                            <li>Medicina General</li>
                            <li>Oftalmología</li>
                            <li>Pediatría</li>
                        </ul>
                    </div>
                    <div className="doctor__channel">
                        <h3>Modalidades de atención:</h3>
                        <p><i className="fas fa-desktop"></i>En Línea</p>
                        <p><i className="far fa-building"></i>Presencial (Sede en Bogotá)</p>
                    </div>
                    <div className="doctor__price">
                        <p>Consulta en línea: <strong>$55.000</strong></p>
                        <p>Consulta presencial: <strong>$65.000</strong></p>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="doctor__schedule">
                    <h3><i className="far fa-calendar-alt"></i>Horarios Disponible Citas</h3>
                    <button className="hero__button"><a href="/register">Sep | 13 | 10:45</a></button>
                    <button className="hero__button"><a href="/register">Sep | 15 | 16:30</a></button>
                    <button className="hero__button"><a href="/register">Sep | 20 | 18:00</a></button>
                    <button className="hero__button"><a href="/register">Sep | 25 | 19:00</a></button>
                    <button className="hero__button"><a href="/register">Sep | 28 | 07:00</a></button>
                </div>
            </section>

            <hr className="hr"/>

            <section className="doctor">
                <div className="doctor__description">
                    <div className="description">
                        <div className="description__img">
                            <figure>
                                <img src={doctoraMaria} alt="profile-doctor" />
                            </figure>
                        </div>
                        <div className="description__first">
                            <h3 className="description__first-name"><a href="/doctor">Dra. Maria Luisa Polanco Cortés</a></h3>
                            <h4 className="description__first-ocupation">Medico General | Cardiologa</h4>
                            <div className="description__calification">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="doctor__services">
                        <h3 className="doctor__services-text">Servicios disponibles:</h3>
                        <ul>
                            <li>Medicina General</li>
                            <li>Ortopedia</li>
                            <li>Pediatría</li>
                            <li>Cardiología</li>
                        </ul>
                    </div>
                    <div className="doctor__channel">
                        <h3>Modalidades de atención:</h3>
                        <p><i className="fas fa-desktop"></i>En Línea</p>
                        <p><i className="far fa-building"></i>Presencial (Sede en Bogota)</p>
                    </div>
                    <div className="doctor__price">
                        <p>Consulta en línea: <strong>$55.000</strong></p>
                        <p>Consulta presencial: <strong>$65.000</strong></p>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="doctor__schedule">
                    <h3><i className="far fa-calendar-alt"></i>Horarios Disponible Citas</h3>
                    <button className="hero__button"><a href="/register">Sep | 03 | 08:45</a></button>
                    <button className="hero__button"><a href="/register">Sep | 08 | 14:30</a></button>
                    <button className="hero__button"><a href="/register">Sep | 22 | 11:30</a></button>
                    <button className="hero__button"><a href="/register">Sep | 28 | 14:30</a></button>
                    <button className="hero__button"><a href="/register">Sep | 30 | 20:00</a></button>
                </div>
            </section>

            <hr className="hr"/>

            <section className="doctor">
                <div className="doctor__description">
                    <div className="description">
                        <div className="description__img">
                            <figure>
                                <img src={doctorLuis} alt="profile-doctor"/>
                            </figure>
                        </div>
                        <div className="description__first">
                            <h3 className="description__first-name"><a href="/doctor"><i className="fas fa-stethoscope"></i>Dr. Luis Alfonso Mateus Osorio</a></h3>
                            <h4 className="description__first-ocupation">Medico General | Cardiologa | Neurólogo | Gastroenterólogo</h4>
                            <div className="description__calification">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="doctor__services">
                        <h3 className="doctor__services-text">Servicios disponibles:</h3>
                        <ul>
                            <li>Medicina General</li>
                            <li>Neurología</li>
                            <li>Gastroenterología</li>
                        </ul>
                    </div>
                    <div className="doctor__channel">
                        <h3>Modalidades de atención:</h3>
                        <p><i className="far fa-building"></i>Presencial (Sede en Bogotá)</p>
                    </div>
                    <div className="doctor__price">
                        <p>Consulta presencial: <strong>$65.000</strong></p>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="doctor__schedule">
                    <h3><i className="far fa-calendar-alt"></i>Horarios Disponible Citas</h3>
                    <button className="hero__button"><a href="/register">Sep | 01 | 09:30</a></button>
                    <button className="hero__button"><a href="/register">Sep | 10 | 12:30</a></button>
                    <button className="hero__button"><a href="/register">Sep | 22 | 07:00</a></button>
                </div>
            </section>
        </section>
    );
}