import './App.css';
import React, { Fragment, useState, useEffect } from 'react'
import './index.css';

//Components
import Registration from './Components/Registration'
import Citas from './Components/Citas'



function App() {

  let citasEnLS = JSON.parse(localStorage.getItem("citas"));
  console.log(citasEnLS);

  if (!citasEnLS) {
    citasEnLS = []
  }

  const [citas, agregarCita] = useState(citasEnLS);


  //Funcion que añade cita nueva desde Formulario
  const addCitaDesdeForm= cita =>{
    agregarCita([...citas,cita])
  }

  const deleteCita = (id) =>{
    console.log(id);

    //Filtrar cita a eliminar
    const citasSinEliminar = citas.filter(cita => cita.id !== id)

    console.log(`Filtradas`,citasSinEliminar);
    agregarCita([
      ...citasSinEliminar
    ])

  }

  //Use Effect
  useEffect(()=>{
    //console.log("listo!");
    localStorage.setItem("citas", JSON.stringify(citas))
  },[citas])


  return (
    <Fragment>

    <h1>Citas Medicas</h1>
    <div className="container">
      <Registration 
        addCitaDesdeForm={addCitaDesdeForm}
      />
      <Citas
        citas={citas}
        deleteCita={deleteCita}
      />
    </div>
    </Fragment>

  );
}

export default App;
