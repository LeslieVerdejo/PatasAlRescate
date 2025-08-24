import React from "react";

function Login() {
  return (
    <form>
        <div className="">
            <h1 className="pb-3">Bienvenido</h1>
        </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
           🐶
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Usuario"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          🔐
        </span>
        <input
          type="Password"
          class="form-control"
          placeholder="Contraseña"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div className="mt-3">
        <button className="btn btn-primary">Ingresar</button>
      </div>
    </form>
  );
}

export default Login;
