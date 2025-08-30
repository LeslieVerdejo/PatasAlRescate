import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import imagenLogin from "../../assets/imgLogin.jpg";
import "./Register.css";

function Register() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [usuario, setUsuarios] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);

  function validarDatos(e) {
    e.preventDefault();
    if (nombres === "" && apellidos === "" && email === "" && usuario === "" && password === "" && password2 === "") {
      setError("Ingresa todos tus datos.");
      toast.error("Los campos están vacíos");
      } else if (nombres === "") {
      setError("Recuerda ingresar tus nombres.");
      toast.error("Los nombres están vacíos");
      } else if (apellidos === "") {
      setError("Recuerda ingresar tus apellidos.");
      toast.error("Los apellidos están vacíos");
      } else if (email === "") {
      setError("Recuerda ingresar tu correo electrónico.");
      toast.error("El correo electrónico está vacío");
    } else if (usuario === "") {
      setError("Recuerda ingresar tu usuario.");
      toast.error("El usuario está vacío");
    } else if (password === "") {
      setError("Recuerda ingresar tu contraseña.");
      toast.error("La contraseña está vacía");
    } else if (password2 === "") {
      setError("Recuerda agregar nuevamente tu contraseña.");
      toast.error("La contraseña está vacía");
    } else {
      setError(false);
      toast.success("Datos correctos, iniciando sesión...");
    }
  }

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={imagenLogin} alt="Login" />
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={validarDatos}>
          <h1 className="titulo">Registra tu cuenta</h1>
          <div className="input-group mb-3 inputT">
            <span className="input-group-text">📊</span>
            <input
              type="text"
              className="form-control"
              placeholder="Nombres"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 inputT">
            <span className="input-group-text">📈</span>
            <input
              type="text"
              className="form-control"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 inputT">
            <span className="input-group-text">📉</span>
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuarios(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 inputT">
            <span className="input-group-text">📧</span>
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 inputT">
            <span className="input-group-text">🔑</span>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 inputT">
            <span className="input-group-text">🔐</span>
            <input
              type="password"
              className="form-control"
              placeholder="Repetir Contraseña"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="btn btn-primary mt-3">
            Crear cuenta
          </button>
          <ToastContainer
            autoClose={3000}
            theme="dark"
            closeOnClick
            pauseOnHover
          />
        </form>
      </div>
    </div>
  );
}

export default Register
