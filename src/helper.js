
export const colorAlerta = (presupuesto ,restante) =>{

let clase; 


if( (presupuesto/4) > restante ){
    clase = "alert u-full-width alert-danger"

}else if(  (presupuesto/2) > restante  ){
    clase = "alert u-full-width alert-warning"

}else{
    clase = "alert u-full-width alert-success"
}

  return clase;
}