import React from 'react';
import '../styles/register.css';
import '../styles/universal.css';

const Register = () =>{
    return(
        <section className="register">
            <div className="title">
                <div className="title__text">
                    <h2>Reserva tu cita</h2>
                </div>
                <div className="title__steps">
                    <ol>
                        <li>
                            <p>Diligencia el formulario a continuación de forma acertada.</p>
                        </li>
                        <li>
                            <p>Espera confirmación a tu correo electrónico.</p>
                        </li>
                        <li>
                            <p>Accede al link que encontrarás en el correo y realiza el pago de la cita através de medios electrónicos.</p>
                        </li>
                    </ol>
                </div>
            </div>
            <div>
                <hr className="hr"/>
            </div>
            <div className="register">
                <form action="" className="register__form">
                    <input className="form__input" type="text" placeholder="Motivo de la visita" required/>
                    <input className="form__input" type="text" placeholder="Nombres" required/>
                    <input className="form__input" type="text" placeholder="Apellidos" required/>
                    <input className="form__input" type="number" placeholder="Teléfono" required/>
                    <input className="form__input" type="email" placeholder="Correo electrónico" required/>
                    <textarea className="form__input" name="detail" id="detail" cols="30" rows="5" placeholder="Deja un comentario para el especialista" required></textarea>
                    <input type="checkbox"/>
                    <p>Acepta nuestra <a href="/terms" target="_blank">política de tratamiento de información</a></p>
                    <input className="hero__button" type="submit" value="Enviar Información"/>
                </form>
            </div>
        </section>
    )
}

export default Register;