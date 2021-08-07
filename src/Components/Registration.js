import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'

import "../index.css"
import "./Registration.css"




const Registration = ({addCitaDesdeForm}) => {

    //State Cita
    const [cita, actualizarCita] = useState({
        mascota: "",
        dueño: "",
        fecha: "",
        hora: "",
        sintomas: "",
    });

    const addCita = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, dueño, fecha, hora, sintomas } = cita

    const onSubmit = (e) => {
        e.preventDefault()
        
        //Valida campos vacios    
        for (const key in cita) {        
            if (cita[key] === "") {
                setError(true)
                return //Si hay error aqui termina la funcion onSubmit
            } 
        }

        //Formatea error
        setError(false)

        //Añade id unico a la cita
        //console.log("me ehecuto");
        cita.id = uuidv4();
        //console.log(cita);
        //console.log(cita.id);

        actualizarCita({
            ...cita,
            id: cita.id,
        }) 

        //Hasta aqui ya tenemos cita completa, sin datos vacios y con ID

        //Enviar cita al registro de citas general
        addCitaDesdeForm(cita)

        //Reiniciar el formulario de cita
        actualizarCita({
            mascota: "",
            dueño: "",
            fecha: "",
            hora: "",
            sintomas: "",
        }) 

    }

    //State Error Input Empty
    const [error, setError] = useState(false);

   

    return (
        <div className="registration">
            <h2>Registro de Pacientes</h2>

            {
                error? 
                
                <p className="alerta-error">Todos los campos deben ser llenados!</p>

                :

                ""
            }
            
            <form
                action=""
                onSubmit={onSubmit}
            >

                <label htmlFor="mascota">
                    Nombre de mascota
                </label>
                <input
                    type="text"
                    name="mascota"
                    id="mascota"
                    placeholder="Laika"
                    onChange={addCita}
                    value={mascota}
                    className="dsd"
                />

                <label htmlFor="dueño">
                    Nombre del dueño
                </label>
                <input
                    type="text"
                    name="dueño"
                    id="dueño"
                    placeholder="Cesar"
                    onChange={addCita}
                    value={dueño}
                    className="dsd"

                />

                <label htmlFor="fecha">
                    Dia de la cita
                </label>
                <input
                    type="date"
                    name="fecha"
                    id="fecha"
                    onChange={addCita}
                    value={fecha}
                    className="dsd"

                />

                <label htmlFor="hora">
                    Hora de la cita
                </label>
                <input
                    type="time"
                    name="hora"
                    id="hora"
                    onChange={addCita}
                    value={hora}
                    className="dsd"

                />

                <label htmlFor="sintomas">
                    Sintomas
                </label>
                <textarea
                    name="sintomas"
                    id="sintomas"
                    rows="10"
                    onChange={addCita}
                    value={sintomas}
                    className="dsd"

                >
                </textarea>

                <button>Agendar</button>

            </form>
        </div>
    )
}

export default Registration;

