import { useState, useEffect } from 'react';

import CreateTask from "../CreateTask/CreateTask";
import ItemTask from "../ItemTask/ItemTask";

const ListTask = ({ tareas }) => { //agregar tareas traidas del local storage tareasdelocal

  const list = ()=>{ 
    return tareas
      .map((task) => (
        <ItemTask key={task.nombre} tarea={task} index={task.nombre} />
      ));
  }


  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col text-center align-middle">Titulo</th>
              <th className="col text-center align-middle">Desde</th>
              <th className="col text-center align-middle">Hasta</th>
              <th className="col text-center align-middle">Descripcion</th>
              <th className="col text-center align-middle">Estado</th>
              <th className="col text-center align-middle">Accion</th>
            </tr>
          </thead>
          <tbody>
            {list()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTask;
