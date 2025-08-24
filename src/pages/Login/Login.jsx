import React, { useState } from "react";


function Login() {
    
    const [usuario, setUsuarios] = useState("")
    const [password, setPassword] = useState("")

function validarDatos(e) {
    e.preventDefault()
    if(usuario === "") {
        alert("El usuario esta vacio")
    } else if(password === "") {
        alert("La contraseña esta vacia")
    } else {
        alert("Bienvenido")
    }
}

  return (
    <form>
        <div className="">
            <h1 className="pb-3">Bienvenido</h1>
        </div>
      <div className="input-group mb-3">
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
      <div className="input-group flex-nowrap">
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
      <div className="mt-3">
        <button onClick={validarDatos}  className="btn btn-primary">Ingresar</button>
      </div>
    </form>
  );
}

export default Login;
