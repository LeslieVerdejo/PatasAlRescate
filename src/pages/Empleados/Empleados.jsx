import "./Empleados.css";
import Navbar from "../../components/Navbar/Navbar";

function Empleados() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Empleados</h1>
        <div col-12>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Cargo</th>
                <th scope="col">Usuario</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Fran</td>
                <td>Perez</td>
                <td>franPerez@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>John</td>
                <td>Doe</td>
                <td>@social</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Empleados;
