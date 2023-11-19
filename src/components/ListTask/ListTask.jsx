import React, { useState } from 'react';

import CreateTask from "../CreateTask/CreateTask";
import ItemTask from "../ItemTask/ItemTask";

const ListTask = ({ tareas }) => {

  React.useEffect(() => {
    console.log('Tareas actualizadas:', tareas);
  }, [tareas]); // Se ejecutará cuando tareas se actualice


  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col text-center align-middle">
              <div className="form-check form-switch justify-content-center d-flex">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
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
          {/*envio cada tarea acumulada*/}
          {tareas.map((tarea, index) => (
            <ItemTask key={index} tarea={tarea} index={index} />
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );

};

export default ListTask;