const ItemTask = ({ tarea, taskCheck }) => {
  return (
    <tr className="ps-2 ">
      <th scope="row">
        <p className="text-center">
          <input
            className="form-check-input"
            type="checkbox"
            checked={tarea.estado}
            onChange={() => {
              taskCheck(tarea);
            }}
          />
        </p>
      </th>
      <td name="titulo-cell">
        <p>{tarea.nombre}</p>
      </td>
      <td name="desde-cell">
        <p>{tarea.fechaInicio}</p>
      </td>
      <td name="hasta-cell">
        <p>{tarea.fechaFin}</p>
      </td>
      <td name="descripcion-cell">
        <p>{tarea.descripcion}</p>
      </td>
      <td name="estado-cell">
        <p>{tarea.estado == true ? "Completo" : "Completar"}</p>
      </td>
    </tr>
  );
};

export default ItemTask;
