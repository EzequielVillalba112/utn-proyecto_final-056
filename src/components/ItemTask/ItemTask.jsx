import React, { useState } from 'react';

const ItemTask = ({ tarea, index }) => {

  return (
      <tr>
        <th scope="row">
          <p className='text-center'>
            <input
              className="form-check-input"
              type="checkbox"
              id={index}
            />
          </p>
        </th>
        <td name="titulo-cell">
          <p>{tarea.nombre}</p>
        </td> 
        <td name="desde-cell">
          <p>{tarea.fechaInicio}</p>
        </td>
        <td name="hasta-cell"><p>{tarea.fechaFin}</p></td>
        <td name="descripcion-cell"><p>{tarea.descripcion}</p></td>
        <td name="estado-cell">
          <p>estado actual</p>
        </td>
        <td name="action-cell">
            <p>Agregar botones</p>
        </td>
      </tr>
  )
};

export default ItemTask;