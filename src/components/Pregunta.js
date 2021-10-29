import React , {useState} from 'react';
import Error from './Error'; 

const Pregunta = ({actualizarPresupuesto, actualizarRestante, actualizarPregunta}) => {

    const [presupuesto, guardarPresupuesto] = useState(0);
    const [error ,  actualizarError ] = useState(false); 


    const definirPresupuesto = (e) =>{

        
        guardarPresupuesto(parseInt(e.target.value));

    }
    const sumbitPresupuesto = (e)=>{

       e.preventDefault(); 

       //validar 
       
       if(presupuesto <= 0 || isNaN(presupuesto) ){
        actualizarError(true); 
        return; 
       }

       //pasa la validacion
       actualizarError(false);

       // actualizar presupuest y restante 
       actualizarPresupuesto(presupuesto);
       actualizarRestante(presupuesto);

      
      //carga condicional
      actualizarPregunta(false);


    }

    return (  

        <form 
        onSubmit = { sumbitPresupuesto }
        > 
             <h2>Coloca tu Presupuesto</h2>

            { error ? <Error mensaje="Presupuesto es invalido" />  :  null}
        
            <label>Presupuesto:</label>

             <input 
             type="number" 
             placeholder="Define Presupuesto"
             className="u-full-width"
             name="presupuesto"
             onChange = { definirPresupuesto }
           
             />        

             <input 
             type="submit" 
             className="u-full-width button button-primary"
             value="Definir Presupuesto"

             />
        
        
        
        </form>



    );
}
 
export default Pregunta;