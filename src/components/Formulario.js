import React, { useState } from "react";
import Error from "./Error";
const shortid = require("shortid");

const Formulario = ({  stateGasto ,validarGasto }) => {
  const [nombregasto, actualizarNombreGasto] = useState("");
  const [cantidadgasto, actualizarCantidadGasto] = useState(0);

  const [error, actualizarError] = useState(false);

  const sumbitGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidadgasto <= 0 || isNaN(cantidadgasto) || nombregasto === "") {
      actualizarError(true);
      return;
    }
    actualizarError(false);

    //crear gasto

    console.log(nombregasto);
    console.log(cantidadgasto);

    const gasto = {
      nombregasto,
      id: shortid.generate(),
      cantidadgasto,
    };

    console.log(gasto);

    validarGasto(true);
    stateGasto(gasto);


    //resetear gasto

    actualizarNombreGasto("");
    actualizarCantidadGasto(0);
  };

  return (
    <form onSubmit={sumbitGasto}>
      {error ? (
        <Error mensaje="Todos los campos son obligatorios o el gasto es invalido" />
      ) : null}

      <label>Nombre Gasto:</label>

      <input
        type="text"
        placeholder="Nombre Gasto"
        className="u-full-width"
        onChange={(e) => {
          actualizarNombreGasto(e.target.value);
        }}
        value={nombregasto}
      />

      <label>Cantidad Gasto:</label>

      <input
        type="number"
        placeholder="Cantidad Gasto"
        className="u-full-width"
        onChange={(e) => {
          actualizarCantidadGasto(parseInt(e.target.value));
        }}
        value={isNaN(cantidadgasto) ? "" : cantidadgasto}
      />

      <input
        type="submit"
        className="u-full-width button button-primary"
        value="Agrega Gasto"
      />
    </form>
  );
};

export default Formulario;
