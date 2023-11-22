import React, { useState } from 'react';

import CreateTask from "../CreateTask/CreateTask";
import ItemTask from "../ItemTask/ItemTask";

const ListTask = ({ tareas }) => { //agregar tareas traidas del local storage tareasdelocal

  const [tareasCargadas, setTareasCargadas] = useState([]);

  React.useEffect(() => {   //
    if (tareas.length > 0) {
      const nuevasTareasCargadas = [...tareasCargadas, ...tareas];
      setTareasCargadas(nuevasTareasCargadas);

      console.log("Tareas entrando desde Form",tareas);
    }
  }, [tareas]);  //manejar igual las tareas traidas del localstorage
  /*

  React.useEffect(() => {   
    if (tareas.length > 0) {
      const nuevasTareasCargadas = [...tareasCargadas, ...tareasdelocal];
      setTareasCargadas(nuevasTareasCargadas);

      console.log("Tareas entrando desde el local",tareasdelocal);
    }
  }, [tareasdelocal]); 

  */


  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col text-center align-middle">
                <div className="form-check form-switch justify-content-center d-flex">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
              </th>
              <th className="col text-center align-middle">Titulo</th>
              <th className="col text-center align-middle">Desde</th>
              <th className="col text-center align-middle">Hasta</th>
              <th className="col text-center align-middle">Descripcion</th>
              <th className="col text-center align-middle">Estado</th>
              <th className="col text-center align-middle">Accion</th>
            </tr>
          </thead>
          <tbody>
            {/* Tareas a reenderizar */}
            {tareasCargadas.map((tarea, index) => (
              <ItemTask key={index} tarea={tarea} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTask;
