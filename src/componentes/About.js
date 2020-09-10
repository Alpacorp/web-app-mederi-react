import React from 'react';
import '../styles/universal.css';
import '../styles/about.css';
import stethoscope from '../assets/stethoscope.png';
import bogota from '../assets/bogota.jpg';

const About = ()=>{
    return(
        <section className="about">
            <section className="content">
                <div className="content__logo">
                    <figure>
                        <img src={stethoscope} alt="logo-mederi" />
                    </figure>
                </div>
                <div className="content__title">
                    <h1>Quienes Somos</h1>
                    <hr />
                </div>
                <div className="content__text">
                    <div>
                        <h3 className="text__h3">Mederi</h3>
                        <p>Somos una empresa fundada en el 2020 durante la pandemia, en donde queremos brindarle a los usuarios una experiencia remota de atención médica desde casa, con la calidad como si estuvieran atendidos de forma presencial con su médico, contamos
                            con diferentes especialades y nuestros servicios se extienden a nivel nacional.</p>
                    </div>
                    <div>
                        <h3 className="text__h3">Visión</h3>
                        <p>A finales del primer semestre de 2021 queremos ser una de las IPS más importantes en Bogotá consolidando un mercado de 500 mil clientes activos para esa fecha.</p>
                    </div>
                    <div>
                        <h3 className="text__h3">Misión</h3>
                        <p>Brindar la mejor experiencia de atención virtual y remota en salud a pacientes del territorio colombiano especialmente en Bogotá con expansión nacional. La mejor expleriencia inclye una serie de atributos como lo son, servicio, calidad,experiencia,
                            oportunidad, cordialidad, expansión y comodidad no solo para nuestros pacientes sino también para el equipo médico quien es la base primordial de nuestro modelo de negocio.</p>
                    </div>
                </div>
            </section>
            <section className="card">
                <div className="card__img">
                    <figure>
                        <img src={bogota} alt="bogota" />
                    </figure>
                </div>
                <div className="card__text">
                    <h2>Bogotá</h2>
                    <button className="hero__button"><a href="/schedule">Agendar Cita</a></button>
                </div>
                <div className="card__comming">
                    <p>Muy pronto en México <span role="img" aria-label="mexico">🇲🇽</span> espéralo ...</p>
                </div>
            </section>
        </section>
    )
}
export default About;