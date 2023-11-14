import 'bootstrap/dist/css/bootstrap.css'
import '../assets/css/demoInterfaz.css'

const DemoInterfaz = () => {
  return (
    <main>
      <div className='container px-3 py-2 px-lg-4 py-lg-5'>
        <div className='row g-3 py-1 py-lg-3 row-cols-1 row-cols-lg-2'>
          <div className='px-0 px-lg-4'>
            <form>
              <div className='mb-3'>
                <label htmlFor="campoNuevaTarea" className='form-label fs-2 fw-bold'>Nueva tarea</label>
                <input type="text" className='form-control' id='campoNuevaTarea' placeholder='Título de la tarea'/>
              </div>
              <button className='btn btn-primary'>Agregar a la lista</button>
            </form>
          </div>
          <div className='card p-0'>
            <div className='card-header'>
              <ul className='nav nav-pills card-header-pills'>
                <li className='nav-item form-check form-switch my-auto'>
                  <input className='form-check-input' type="checkbox" role='switch' id='seleccionarTodo' />
                  <label className='form-check-label' htmlFor="seleccionarTodo">Seleccionar todo</label>
                </li>
                <li className='nav-item ms-auto'>
                  <div className='btn-group' role='group'>
                    <button type='button' className='btn btn-success' disabled>Completar</button>
                    <button type='button' className='btn btn-outline-secondary' disabled>Borrar</button>
                  </div>
                </li>
              </ul>
            </div>
            <div className='card-body p-0'>
              <div className='lista overflow-auto'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item d-flex justify-content-between align-items-start'>
                    <div className='ms-2 m-auto'>
                      <div className='d-flex'>
                        <input className='form-check-input me-3' type="checkbox" id="item-1" />
                        <h5 className='mb-1'>Tarea de Ejemplo</h5>
                      </div>
                    </div>
                    <button type='button' className='btn btn-link text-success'>Completar</button>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-start'>
                    <div className='ms-2 m-auto'>
                      <div className='d-flex'>
                        <input className='form-check-input me-3' type="checkbox" id="item-2" />
                        <h5 className='mb-1 text-decoration-line-through'>Tarea de Ejemplo</h5>
                      </div>
                    </div>
                    <button type='button' className='btn btn-link' disabled>Completada</button>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-start'>
                    <div className='ms-2 m-auto'>
                      <div className='d-flex'>
                        <input className='form-check-input me-3' type="checkbox" id="item-3" />
                        <h5 className='mb-1 text-decoration-line-through'>Tarea de Ejemplo</h5>
                      </div>
                    </div>
                    <button type='button' className='btn btn-link' disabled>Completada</button>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-start'>
                    <div className='ms-2 m-auto'>
                      <div className='d-flex'>
                        <input className='form-check-input me-3' type="checkbox" id="item-4" />
                        <h5 className='mb-1 text-decoration-line-through'>Tarea de Ejemplo</h5>
                      </div>
                    </div>
                    <button type='button' className='btn btn-link' disabled>Completada</button>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-start'>
                    <div className='ms-2 m-auto'>
                      <div className='d-flex'>
                        <input className='form-check-input me-3' type="checkbox" id="item-5" />
                        <h5 className='mb-1'>Tarea de Ejemplo</h5>
                      </div>
                    </div>
                    <button type='button' className='btn btn-link text-success'>Completar</button>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-start'>
                    <div className='ms-2 m-auto'>
                      <div className='d-flex'>
                        <input className='form-check-input me-3' type="checkbox" id="item-6" />
                        <h5 className='mb-1 text-decoration-line-through'>Tarea de Ejemplo</h5>
                      </div>
                    </div>
                    <button type='button' className='btn btn-link' disabled>Completada</button>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-start'>
                    <div className='ms-2 m-auto'>
                      <div className='d-flex'>
                        <input className='form-check-input me-3' type="checkbox" id="item-7" />
                        <h5 className='mb-1'>Tarea de Ejemplo</h5>
                      </div>
                    </div>
                    <button type='button' className='btn btn-link text-success'>Completar</button>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-start'>
                    <div className='ms-2 m-auto'>
                      <div className='d-flex'>
                        <input className='form-check-input me-3' type="checkbox" id="item-8" />
                        <h5 className='mb-1 text-decoration-line-through'>Tarea de Ejemplo</h5>
                      </div>
                    </div>
                    <button type='button' className='btn btn-link' disabled>Completada</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DemoInterfaz
