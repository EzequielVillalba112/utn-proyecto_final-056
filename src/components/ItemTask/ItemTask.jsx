export default function ItemTask() {
  return (
    <div className="card-body p-0">
    <div className="lista overflow-auto">
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 m-auto">
            <div className="d-flex">
              <input
                className="form-check-input me-3"
                type="checkbox"
                id="item-1"
              />
              <h5 className="mb-1">Tarea de Ejemplo</h5>
            </div>
          </div>
          <button type="button" className="btn btn-link text-success">
            Completar
          </button>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 m-auto">
            <div className="d-flex">
              <input
                className="form-check-input me-3"
                type="checkbox"
                id="item-2"
              />
              
              <h5 className="mb-1 text-decoration-line-through">
                Tarea de Ejemplo
              </h5>
            </div>
          </div>
          <button type="button" className="btn btn-link" disabled>
            Completada
          </button>
        </li>
      </ul>
    </div>
  </div>
  )
}