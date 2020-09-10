import React from 'react';
import '../styles/universal.css';
import '../styles/title.css';

export const Title = ()=> {
    return(
         <section class="title">
            <div class="title__text">
                <h2>Sigue estos pasos para obtener tu cita médica</h2>
            </div>
            <div class="title__steps">
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
    );
}