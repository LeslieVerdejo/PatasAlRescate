import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import imagenLogin from "../../assets/imgLogin.jpg";
import "./Login.css";

function Login() {
  const [usuario, setUsuarios] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function validarDatos(e) {
    e.preventDefault();

    if (usuario === "" && password === "") {
      setError("Recuerda agregar tus datos.");
      toast.error("Los campos están vacíos");
    } else if (password === "") {
      setError("Recuerda agregar tu contraseña.");
      toast.error("La contraseña está vacía");
    } else if (usuario === "") {
      setError("Recuerda agregar tu usuario.");
      toast.error("El usuario está vacío");
    } else if (usuario === "admin" && password === "admin123") {
      setError(false);
      toast.success("Datos correctos, iniciando sesión...");
      navigate("/");
    } else {
      setError("Usuario o contraseña incorrectos");
      toast.error("Usuario o contraseña incorrectos");
    }
  }

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={imagenLogin} alt="Login" />
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={validarDatos}>
          <h1 className="titulo">Bienvenido</h1>
          <div className="input-group mb-3 inputT">
            <span className="input-group-text">🐶</span>
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuarios(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 inputT">
            <span className="input-group-text">🔐</span>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="btn btn-primary mt-3">
            Ingresar
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

export default Login;
