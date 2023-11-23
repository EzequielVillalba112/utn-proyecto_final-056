export default function ListTaskComplete({showComplete,setShowComplete}) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        onChange={(e)=> setShowComplete(e.target.checked)}
        checked={showComplete}
      />
      <label>Ver tareas hechas</label>
    </div>
  );
}
