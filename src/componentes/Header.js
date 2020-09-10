import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/universal.css';
import '../styles/header.css';
import logo from '../assets/1-logo-mederi.png'
import imgFb from '../assets/facebook.png';
import imgIns from '../assets/instagram.png';

const Header = ()=>{
  return (
    <div className="header">
       <div className="header__logo">
          <figure className="logo__img">
            <Link to="/">
              <img src={logo} alt="mederi-logo" />
            </Link>
          </figure>
        </div>
        <div className="header__menu">
            <nav>
                <ul>
                  <li><Link to="/about">Conócenos</Link></li>
                  <li><Link to="/services">Nuestros Servicios</Link></li>
                  <li><Link to="/schedule">Agenda tu Cita</Link></li>
                  <li><Link to="/contact">Contáctanos</Link></li>
                  <li><a href="/"><img src={imgFb} alt="facebook-icon" /></a></li>
                  <li><a href="/"><img src={imgIns} alt="instagram-icon" /></a></li>
                  <li><a href="/"><i className="fas fa-search"></i></a></li>
                  <li><a href="/"><i className="fas fa-user-clock"></i></a></li>
                </ul>
            </nav>
        </div>
    </div>
  );
}
export default Header;