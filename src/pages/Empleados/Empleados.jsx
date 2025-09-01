import "./Empleados.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import dataEmpleados from "../../data/empleados";
import ModalPage from "../../components/ModalPage/ModalPage";

function Empleados() {
  const [empleados, setEmpleados] = useState(dataEmpleados);

  const [show, setShow] = useState(false);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);
  const [accion, setAccion] = useState(""); // "ver" | "editar" | "eliminar"

  const handleClose = () => {
    setShow(false);
    setSelectedEmpleado(null);
    setAccion("");
  };

  const handleShow = (empleado, tipoAccion) => {
    setSelectedEmpleado(empleado);
    setAccion(tipoAccion);
    setShow(true);
  };

  // Ejemplo para eliminar
  const handleEliminar = (id) => {
    setEmpleados(empleados.filter(emp => emp.id !== id));
    handleClose();
  };

  return (
    <>
      <Navbar />
      <main className="container pb-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h1 className="mb-3">Empleados</h1>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => handleShow(null, "agregar")}
            >
              <i className="fa-solid fa-user-plus"></i>
            </button>
          </div>

          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Cargo</th>
                    <th>Usuario</th>
                    <th>Salario</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {empleados.map((empleado) => (
                    <tr key={empleado.id}>
                      <th>{empleado.id}</th>
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
                          onClick={() => handleShow(empleado, "ver")}
                        >
                          <i className="fa-solid fa-vest"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleShow(empleado, "editar")}
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleShow(empleado, "eliminar")}
                        >
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

      {/* Pasamos los props necesarios */}
      <ModalPage 
        show={show} 
        handleClose={handleClose}
        accion={accion}
        empleado={selectedEmpleado}
        handleEliminar={handleEliminar}
      />
    </>
  );
}

export default Empleados;
