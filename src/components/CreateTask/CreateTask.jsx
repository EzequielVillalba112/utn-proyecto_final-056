export default function CreateTask() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="campoNuevaTarea" className="form-label fs-2 fw-bold">
          Nueva tarea
        </label>
        <input
          type="text"
          className="form-control"
          id="campoNuevaTarea"
          placeholder="Título de la tarea"
        />
      </div>
      <button className="btn btn-primary">Agregar a la lista</button>
    </form>
  );
}
