import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import { imagenLogin } from "../../assets/imgLogin.png";
import "./Login.css";

function Login() {
  const [usuario, setUsuarios] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function validarDatos(e) {
    e.preventDefault();

    if (usuario === "" && password === "") {
      setError("Recuerda agregar tus datos.");
      toast.error("Los campos estan vacios");
    } else if (password === "") {
      setError("Recuerda agregar tu contraseña.");
      toast.error("La contraseña esta vacia");
    } else if (usuario === "") {
      setError("Recuerda agregar tu usuario.");
      toast.error("El usuario esta vacio");
    } else {
      setError(false);
      toast.success("Datos correctos, iniciando sesión...");
    }
  }

  return (
    <form className="form-principal">
      <div className="titulo">
        <h1 className="pb-3">Bienvenido</h1>
      </div>
      <div className="input-group mb-3 inputT">
        <span className="input-group-text" id="basic-addon1">
          🐶
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Usuario"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={usuario}
          onChange={(e) => setUsuarios(e.target.value)}
        />
      </div>
      <div className="input-group flex-nowrap inputT">
        <span className="input-group-text" id="addon-wrapping">
          🔐
        </span>
        <input
          type="Password"
          className="form-control"
          placeholder="Contraseña"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-3 pt-3">
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
        <button onClick={validarDatos} className="btn btn-primary">
          Ingresar
        </button>
      </div>
      <ToastContainer
        // position="top-center"
        autoClose={3000}
        // hideProgressBar
        theme="dark"
        closeOnClick
        pauseOnHover
      />
    </form>
  );
}

export default Login;
