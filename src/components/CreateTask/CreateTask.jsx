import React, { useState } from 'react';

const CreateTask = ({ enviarTareaALista }) => {

  const [tarea, setTarea] = useState({
    nombre: '',
    fechaInicio: '',
    fechaFin: '',
    descripcion: '',
    estado: 'Pendiente'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTarea({ ...tarea,[name]: value});
  };

  const handleEnviarTarea = (event) => {
    console.log("enviando")
    event.preventDefault();
    if (tarea.nombre.trim() !== '' && check_dates(tarea.fechaInicio,tarea.fechaFin)) {
      enviarTareaALista(tarea);
      setTarea({
        nombre: '',
        fechaInicio: '',
        fechaFin: '',
        descripcion: ''
      });
    }
  };

  function check_dates(fechaA, fechaB) {
    const dateA = new Date(fechaA);
    const dateB = new Date(fechaB);
    return dateA < dateB && dateB < new Date();
  }

  return (
    <div className="row justify-content-center d-flex">
      <h3 className="text-center">Crear Tarea</h3>
      <form onSubmit={handleEnviarTarea}>
        <div className="row justify-content-center d-flex">
          <div className="mb-3">
          <label className="form-label" htmlFor="titulo_tarea">Titulo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Titulo de la tarea"
              name="nombre"
              value={tarea.nombre}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          <div className="mb-3">
          <label className="form-label" htmlFor="descripcion_tarea">Descricpion</label>
            <textarea
              className="form-control"
              placeholder="Descripcion de la tarea"
              id="descripcion_tarea"
              name="descripcion"
              value={tarea.descripcion}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row justify-content-center d-flex">
          <div className="col mb-3 input-group">
            <input
              type="datetime-local"
              className="form-control"
              name="fechaInicio"
              value={tarea.fechaInicio}
              onChange={handleInputChange}
            />
            <span className="input-group-text">Hasta</span>
            <input
              type="datetime-local"
              className="form-control"
              name="fechaFin"
              value={tarea.fechaFin}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Agregar a la lista
        </button>
      </form>
    </div>
  );
};

export default CreateTask;