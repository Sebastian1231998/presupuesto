import React, { useState , useEffect } from "react";
import "./index.css";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import MostrarPresupuesto from "./components/MostrarPresupuesto";
function App() {
  const [presupuesto, actualizarPresupuesto] = useState(0);
  const [restante, actualizarRestante] = useState(0);
  const [mostratPregunta, actualizarPregunta] = useState(true);
  const [gasto , stateGasto] = useState({})
  const [gastos, actualizarGastos] = useState([]);
  const [validategasto, validarGasto] = useState(false);
  
  useEffect(()=>{

    if(validategasto){

      actualizarGastos([...gastos, gasto]);

    }

    let presupuestoRestante = restante - gasto.cantidadgasto;
    actualizarRestante(presupuestoRestante);
  
    validarGasto(false);
  
    }, [gasto])


 
  return (
    <div className="App">
      <header className="contenido container ">
        <h1>Gasto semanal</h1>

        <div className="contenido-principal">
          {mostratPregunta ? (
            <Pregunta
              actualizarPresupuesto={actualizarPresupuesto}
              actualizarRestante={actualizarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="column one-half">
                <h2>Agrega tus gastos aqui</h2>

                <Formulario 
                stateGasto = {stateGasto}
                validarGasto={validarGasto}
                 />
              </div>

              <div className="column one-half">
                <h2>Listado</h2>

                <Listado gastos={gastos} />

                <MostrarPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />

              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
