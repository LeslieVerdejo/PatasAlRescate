import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalPage = ({ show, handleClose, accion, empleado, handleEliminar }) => {
  const [formData, setFormData] = useState(empleado || {});

  // Si es editar, se inicializa el formulario con el empleado seleccionado
  React.useEffect(() => {
    setFormData(empleado || {});
  }, [empleado]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const renderContenido = () => {
    switch (accion) {
      case "ver":
        return (
          <div>
            <p><b>Nombre:</b> {empleado?.nombre}</p>
            <p><b>Apellido:</b> {empleado?.apellido}</p>
            <p><b>Correo:</b> {empleado?.correo}</p>
            <p><b>Cargo:</b> {empleado?.cargo}</p>
            <p><b>Usuario:</b> {empleado?.usuario}</p>
            <p><b>Salario:</b> {empleado?.salario}</p>
          </div>
        );
      case "editar":
        return (
          <form>
            <input 
              type="text" 
              name="nombre" 
              value={formData.nombre || ""} 
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Nombre"
            />
            <input 
              type="text" 
              name="apellido" 
              value={formData.apellido || ""} 
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Apellido"
            />
            <input 
              type="email" 
              name="correo" 
              value={formData.correo || ""} 
              onChange={handleChange}
              className="form-control mb-2"
              placeholder="Correo"
            />
            {/* ... repites para cargo, usuario, salario */}
          </form>
        );
      case "eliminar":
        return (
          <p>¿Seguro que deseas eliminar a <b>{empleado?.nombre} {empleado?.apellido}</b>?</p>
        );
      case "agregar":
        return (
          <form>
            <input type="text" name="nombre" placeholder="Nombre" className="form-control mb-2"/>
            <input type="text" name="apellido" placeholder="Apellido" className="form-control mb-2"/>
            <input type="email" name="correo" placeholder="Correo" className="form-control mb-2"/>
            {/* resto de campos */}
          </form>
        );
      default:
        return null;
    }
  };

  const renderFooter = () => {
    switch (accion) {
      case "eliminar":
        return (
          <Button variant="danger" onClick={() => handleEliminar(empleado.id)}>
            Eliminar
          </Button>
        );
      case "editar":
        return (
          <Button variant="warning" onClick={() => alert("Guardar cambios aquí")}>
            Guardar
          </Button>
        );
      case "agregar":
        return (
          <Button variant="primary" onClick={() => alert("Agregar empleado aquí")}>
            Agregar
          </Button>
        );
      default:
        return (
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        );
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          {accion === "ver" && "Detalles del Empleado"}
          {accion === "editar" && "Editar Empleado"}
          {accion === "eliminar" && "Eliminar Empleado"}
          {accion === "agregar" && "Agregar Empleado"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderContenido()}</Modal.Body>
      <Modal.Footer>{renderFooter()}</Modal.Footer>
    </Modal>
  );
};

export default ModalPage;