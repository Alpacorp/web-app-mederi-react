import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/universal.css'
import '../styles/contact.css'

export const Contact = ()=>{
    return(
        <section className="contact">
            <section className="title">
                <div className="title__text">
                    <h2>Contactárnos es muy fácil</h2>
                </div>
                <div className="title__steps">
                    <ul>
                        <li>
                            <p>A través del siguiente formulario en donde te contactaremos lo más pronto posible.</p>
                        </li>
                        <li>
                            <p>Por medio de nuestra línea de <a href="#contact">atención</a> al usuario.</p>
                        </li>
                        <li>
                            <p>Desde nuestras diferentes redes sociales.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="form">
                <form action="" className="form__contact" autoComplete="off">
                    <input className="input" aria-label="Nombre Completo" type="text" name="name" id="name" placeholder="Nombre Completo*" required />
                    <input className="input" aria-label="Correo Electrónico" type="email" name="email" id="email" placeholder="Correo Electrónico*" required />
                    <input className="input" aria-label="Teléfono" type="number" name="phone" id="phone" placeholder="Teléfono*" required />
                    <textarea className="input" name="detail" id="detail" cols="30" rows="5" placeholder="Cuéntanos tu inquietud*" required></textarea>
                    <label htmlFor="terms"><input type="checkbox" name="terms" id="terms" required /> Acepta nuestra <Link to="/terms" target="_blank">política de privacidad   </Link></label>
                    <input className="hero__button" type="submit" value="Enviar Información" />
                </form>
            </section>
        </section>
    );
}
