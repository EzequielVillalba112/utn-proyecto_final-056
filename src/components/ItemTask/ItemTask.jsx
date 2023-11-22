import React, { useState } from "react";

const ItemTask = ({ tarea, index }) => {
  return (
    <tr>
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
        <p>{tarea.estado}</p>
      </td>
      <td name="action-cell">
        {tarea.estado == "Pendiente" ? (
          <button className="btn btn-success">
            {tarea.estado == "Pendiente" ? "Completar" : "Completo"}
          </button>
        ) : (
          "Completo"
        )}
      </td>
    </tr>
  );
};

export default ItemTask;
