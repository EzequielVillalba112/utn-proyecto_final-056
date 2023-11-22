import React, { useState } from 'react';

import CreateTask from "./components/CreateTask/CreateTask"
import DemoInterfaz from "./components/DemoInterfaz"
import ListTask from "./components/ListTask/ListTask"
import './App.css'

/*
<CreateTask enviarTareaALista={enviarTareaALista} />
<ListTask tareas={tareas} />
*/


const App = () => {
  const [tareas, setTareas] = useState([]);
  
    // Función para agregar la tarea a la lista de tareas
  const enviarTareaALista = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <div className="container">
      <div className="mx-auto col-lg-6 col-12 p-2">
        {/* Pasar la función handleRecibirTarea como prop */}
        <CreateTask enviarTareaALista={enviarTareaALista}/>
      </div>
      <div className="mx-auto col-12 p-2">
        <ListTask tareas={tareas} />
      </div>
    </div>
  )
}

export default App