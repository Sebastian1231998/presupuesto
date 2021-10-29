import React from 'react';


const Listado = ({gastos}) => {
    return ( 


        
        <div className="gastos-realizados">
   {gastos.map( gasto => (

       <li
       key={gasto.id}
       >
           <p>
                {gasto.nombregasto}
               <span className="gasto">{gasto.cantidadgasto}</span>
           </p>
       </li>

   ))}

        </div>

     );
}
 
export default Listado;