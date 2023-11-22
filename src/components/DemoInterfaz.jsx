import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/demoInterfaz.css";
import CreateTask from "./CreateTask/CreateTask";

const DemoInterfaz = () => {
  return (
    <main>
      <div className="container px-3 py-2 px-lg-4 py-lg-5">
        <div className="row g-3 py-1 py-lg-3 row-cols-1 row-cols-lg-2">
          <div className="px-0 px-lg-4">

            //form add task
           <CreateTask/>
          </div>
        
          ///card = container list
          <div className="card p-0">
            <div className="card-header">

              ///complet delete
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
/////
            ////Item task
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default DemoInterfaz;
