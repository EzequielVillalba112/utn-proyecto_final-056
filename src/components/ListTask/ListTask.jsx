import ItemTask from "../ItemTask/ItemTask";

const ListTask = ({ tareas, checkList, estate }) => {
  //agregar tareas traidas del local storage tareasdelocal

  const list = (estad) => {
    return tareas
      .filter((task) => task.estado === estad)
      .map((task, index) => (
        <ItemTask
          key={index}
          tarea={task}
          index={task.nombre}
          taskCheck={checkList}
        />
      ));
  };

  return (
    <div className="mx-auto col-12 p-2 bg-light rounded-2">
      <div className="table-responsive p2">
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th className="col text-start align-middle">Titulo</th>
              <th className="col text-start align-middle">Desde</th>
              <th className="col text-start align-middle">Hasta</th>
              <th className="col text-start align-middle">Descripcion</th>
              <th className="col text-start align-middle">Estado</th>
            </tr>
          </thead>
          <tbody>{list(estate)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTask;
