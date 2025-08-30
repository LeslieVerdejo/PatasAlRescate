import "./Empleados.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import dataEmpleados from "../../data/empleados";

function Empleados() {
  const [empleados, setEmpleados] = useState(dataEmpleados);

  return (
    <>
      <Navbar />
      <main className="container pb-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h1 className="mb-3">Empleados</h1>
            <button type="button" className="btn btn-primary">
              <i className="fa-solid fa-user-plus"></i>
            </button>
          </div>

          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Salario</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {empleados.map((empleado) => (
                    <tr key={empleado.id}>
                      <th scope="row">{empleado.id}</th>
                      <td>{empleado.nombre}</td>
                      <td>{empleado.apellido}</td>
                      <td>{empleado.correo}</td>
                      <td>{empleado.cargo}</td>
                      <td>{empleado.usuario}</td>
                      <td>{empleado.salario}</td>
                      <td className="text-nowrap">
                        <button
                          type="button"
                          className="btn btn-success btn-sm me-2"
                        >
                          <i className="fa-solid fa-vest"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-sm me-2"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button type="button" className="btn btn-danger btn-sm">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Empleados;
