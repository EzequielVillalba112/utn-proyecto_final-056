export default function ListTaskComplete({
  showComplete,
  setShowComplete,
  deleTask,
}) {
  const handleDelete = () => {
    if (window.confirm("¿Estas seguro/a de eliminar las tareas?")) {
      deleTask();
    }
  };

  return (
    <div className="form-check form-switch d-flex justify-content-between ">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        onChange={(e) => setShowComplete(e.target.checked)}
        checked={showComplete}
      />
      <label>Ver tareas hechas</label>

      <button type="button" onClick={handleDelete} className="btn btn-danger">
        Eliminar
      </button>
    </div>
  );
}
