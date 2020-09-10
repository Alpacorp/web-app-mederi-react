import React from 'react';
import '../styles/universal.css';
import '../styles/doctor.css';
import doctor from '../assets/doctor-luis.png';

export const Doctor = ()=>{
    return (
        <section className="doctor__container">
         <section className="doctor__detail">
            <div className="doctor__detail-description">
                <div className="detail">
                    <div className="description__img">
                        <figure>
                            <img src={doctor} alt="profile-doctor" />
                        </figure>
                    </div>
                    <div className="description__first">
                        <h3 className="description__first-name"><i className="fas fa-stethoscope"></i>Dr. Luis Alfonso Mateus Osorio</h3>
                        <h4 className="description__first-ocupation">Medico General | Cardiologa | Neurólogo | Gastroenterólogo</h4>
                    </div>
                </div>
                <div className="work">
                    <div className="work__title">
                        <h2>Experiencia</h2>
                    </div>
                    <div className="work__text">
                        <h3><i className="far fa-address-card"></i>Sobre mi:</h3>
                        <p>Soy doctor egresado de la Universidad Nacional de Colombia, especialista en cardiología, neurología y gastroentrologia de la universidad de Michigan USA con una ocupación laboral de más de 15 años en el sector trabajando a nivel nacional
                            en ciudades principales de Colombia.</p>
                    </div>
                </div>
                <div className="work">
                    <div className="work__title">
                        <h3><i className="far fa-star"></i>Especialista en:</h3>
                    </div>
                    <div className="work__text">
                        <ul>
                            <li>Medicina General</li>
                            <li>Cardiología</li>
                            <li>Gastroenterología</li>
                            <li>Neurología</li>
                        </ul>
                    </div>
                </div>
                <div className="work">
                    <div className="work__title">
                        <h3><i className="fas fa-globe"></i>Idiomas:</h3>
                    </div>
                    <div className="work__text">
                        Español
                    </div>
                </div>
                <div className="work">
                    <div className="work__title">
                        <h3><i className="fas fa-university"></i>Universidades:</h3>
                    </div>
                    <div className="work__text">
                        <ul>
                            <li>Universidad Nacional de Colombia</li>
                            <li>Universidad de Michigan</li>
                        </ul>
                    </div>
                </div>
                <div className="work">
                    <div className="work__title">
                        <h3><i className="fas fa-user-md"></i>Experiencia Laboral:</h3>
                    </div>
                    <div className="work__text">
                        <ul>
                            <li>Hospital Santa Clara</li>
                            <li>Hospital Barranquilla</li>
                            <li>Hospital Mederi</li>
                            <li>Hospital Cardiovascular del Niño</li>
                            <li>Clínica Country</li>
                            <li>Hosital Lili del Valle</li>
                        </ul>
                    </div>
                </div>
                <div className="work">
                    <div className="work__title">
                        <h3><i className="fas fa-virus"></i>Enfermedades tratadas:</h3>
                    </div>
                    <div className="work__text">
                        <ul>
                            <li>Cardiovasculares</li>
                            <li>Renales</li>
                            <li>Respiratorias</li>
                            <li>Afecciones del colon</li>
                            <li>Diversas afecciones estomacales</li>
                            <li>Lesiones Neuronales</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="doctor__detail-schedule">
                <div className="doctor__schedule-detail">
                    <h3><i className="far fa-calendar-alt"></i>Horarios Disponible Citas</h3>
                    <button className="hero__button"><a href="/register">Sep | 01 | 09:30</a></button>
                    <button className="hero__button"><a href="/register">Sep | 10 | 12:30</a></button>
                    <button className="hero__button"><a href="/register">Sep | 22 | 07:00</a></button>
                </div>
            </div>
        </section>
        <section className="bottom">
            <button className="hero__button"><a href="/">Volver</a></button>
        </section>
    </section>
    );
}