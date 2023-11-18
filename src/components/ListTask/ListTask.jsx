import ItemTask from "../ItemTask/ItemTask";

export default function ListTask() {
  return (
    <div className="card p-0">
            <div className="card-header">
              <ul className="nav nav-pills card-header-pills">
                <li className="nav-item form-check form-switch my-auto">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="seleccionarTodo"
                  />
                  <label className="form-check-label" htmlFor="seleccionarTodo">
                    Seleccionar todo
                  </label>
                </li>
                <li className="nav-item ms-auto">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-success" disabled>
                      Completar
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      disabled
                    >
                      Borrar
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <ItemTask/>
          </div>
  )
}