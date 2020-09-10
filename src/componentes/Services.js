import React from 'react';
import '../styles/universal.css';
import '../styles/services.css';

const Services = ()=>{
    return (
        <section className="services__container">
            <section className="title">
                <div className="title__text">
                    <h2>Contamos con especialistas para atender los servicios básicos más importantes y frecuentes que nuestros usuarios requieren.</h2><br/>
                    <p>Puedes agendar tu cita para asistir presencialmete (Solo en Bogotá) o de forma virtual (Cubrimiento Nacional)</p>
                </div>
            </section>
            <section className="services">
                <div>
                    <div className="services__subtitle">
                        <h2>Servicios más comúnes</h2>
                    </div>
                    <div className="services__detail">
                        <ol>
                            <li>Colonterapia</li>
                            <li>Gastroenterología</li>
                            <li>Afecciones respiratorias</li>
                            <li>Medicina General</li>
                        </ol>
                    </div>
                </div>
                <div>
                    <div className="services__subtitle">
                        <h2>Servicios más frecuentes</h2>
                    </div>
                    <div className="services__detail">
                        <ol>
                            <li>Oftalmología</li>
                            <li>Neurología</li>
                            <li>Cardiología</li>
                            <li>Pediatria</li>
                            <li>Ortopedia</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className="button">
                <a href="/schedule"><button className="hero__button">Agenda Tu Cita Ahora</button></a>
            </section>
        </section>
    );
}

export default Services;