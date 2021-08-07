import React, { /*useState*/ } from 'react'

import "./Citas.css"


const Citas = ({citas, deleteCita}) => {

    const tituloH2 = citas.length > 0 ? "Administra tus Citas":"Agrega tus Citas"

    return (
        <div className="citas">
            <h2>{tituloH2}</h2>
            

            {citas.map((cita)=>(
                <div key={cita.id} className="cita">
                    <p>Mascota: <span>{cita.mascota}</span></p>
                    <p>Dueño: <span>{cita.dueño}</span></p>
                    <p>Fecha: <span>{cita.fecha}</span></p>
                    <p>Hora: <span>{cita.hora}</span></p>
                    <p>Sintomas: <span>{cita.sintomas}</span></p>
                    <p>Id: <span>{cita.id}</span></p>

                    <button 
                        className="button eliminar"
                        onClick={() => deleteCita(cita.id)}
                    >X</button>
                </div>
            ))}    
        </div>
    )
}

export default Citas


