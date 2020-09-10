import React from 'react';
import '../styles/universal.css';
import '../styles/footer.css'
import stethoscope from '../assets/stethoscope.png';

const Footer = ()=>{
  return (
    <div id="#contact">
      <footer className="footer">
            <div className="footer__text">
                <h3><img className="iconimg" src={stethoscope} alt="stethoscope"/> Quienes Somos</h3>
                <p>Somos una empresa fundada en el 2020 durante la pandemia, en donde queremos brindarle a los usuarios una experiencia remota de atención médica desde casa, con la calidad como si estuvieran atendidos de forma presencial con su médico, contamos
                    con diferentes especialades y nuestros servicios se extienden a nivel nacional.</p>
            </div>
            <div className="footer__text">
                <h3>Blog</h3>
                <p>Te mantenemos actualizado con noticias de interés en salud y tecnología.</p>
                <br/>
                <p>Accede <a href="/blog">aquí</a></p>
            </div>
            <div className="footer__text">
                <h3>Contáctanos</h3>
                <p><i className="fas fa-mobile-alt"></i>(031) 9823421 </p>
                <p><i className="fas fa-map-marker-alt"></i>Calle 127 # 12A - 23</p>
                <p><i className="fab fa-whatsapp"></i>(+57) 3218094321</p>
            </div>
        </footer>

        <section className="subfooter">
            <p>Todos los derechos reservados | Mederi 2020</p>
        </section>
    </div>
  );
}
export default Footer;