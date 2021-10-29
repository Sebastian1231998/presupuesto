import React, { Fragment } from "react";
import { colorAlerta } from '.././helper';
const MostrarPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <p className="alert alert-primary u-full-width">Presupuesto: {presupuesto}</p>

      <p className={ colorAlerta (presupuesto , restante)}>Restante: {restante}</p>
    </Fragment>
  );
};

export default MostrarPresupuesto;
