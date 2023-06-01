//Tengo que crear un ESTADO que va almacenar el valor del contador. 
//1) Voy a importar el hook "useState"
import { useState } from "react";

//2) useState me retorna un array con dos elementos. El primer elemento es el estado y el segundo es una función que me actualiza el valor del estado. 

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    

    let maximo = 10;
    //Represento al stock máximo de cada producto. 

    //Entre () colocamos el valor inicial del estado. 
    //Siempre trabajo con los estados en la parte superior de mi componente.
    
    //Funciones para aumentar y disminuir el contador: 

    const incrementar = () => {
        if(contador < maximo){
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > 1) {
            setContador(contador - 1);
        }
    }

  return (
    <div>
        <button onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button onClick={incrementar}> + </button>
    </div>
  )
}

//Incrementar y decrementar van sin parentesis porque sino no se ejecutarían al momento de renderizar el componente y solo queremos que se ejecuta cuando el visitante haga click en los botones. 



export default ItemCount