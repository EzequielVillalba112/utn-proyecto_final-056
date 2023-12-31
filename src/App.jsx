import React, { useEffect, useState } from 'react';
import CreateTask from "./components/CreateTask/CreateTask"
import ListTask from "./components/ListTask/ListTask"
import './App.css'
import ListTaskComplete from './components/ListTaskComplete/ListTaskComplete';
import "bootstrap/dist/css/bootstrap.css";
import "../src/assets/css/demoInterfaz.css";

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [showComplete, setShowComplete] = useState(false);
  
  // Función para agregar la tarea a la lista de tareas
  const enviarTareaALista = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  //Local Storage: 
  useEffect(()=>{
    let data = localStorage.getItem("list-Tasks");
    if(data) {
      setTareas(JSON.parse(data));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("list-Tasks", JSON.stringify(tareas));
  }, [tareas]);
  ////////
  
  const checkList = (task) =>{
    setTareas(
      tareas.map((tas) =>
        tas.nombre == task.nombre ? {...task, estado: !tas.estado} : tas
      )
    )
  }

  const deleTask = () => {
    setTareas(tareas.filter((tas) => !tas.estado));
    setShowComplete(false);
  }

  return (
    <div className="container">
      <div className="mx-auto col-lg-6 col-12 p-2">
        {/* Pasar la función handleRecibirTarea como prop */}
        <CreateTask enviarTareaALista={enviarTareaALista}/>
      </div>
      <div className="mx-auto col-12 p-2">
        <ListTask tareas={tareas}  checkList={checkList} estate={false}/>
      </div>
      <div className="mx-auto col-12 p-2 bg-light rounded-2">
       <ListTaskComplete showComplete={showComplete} setShowComplete={setShowComplete} deleTask = {deleTask}/>
        {
          showComplete == true &&(
            <div className="mx-auto col-12 bg-light rounded-2">
              <ListTask tareas={tareas}  checkList={checkList} estate={showComplete}/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App