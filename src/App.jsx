/*
Componentes 1: 

// Definición: conjunto de elementos que cumplen una función específica. 
(ejemplos: un botón, un formulario, una card de un producto). 

Ventajas de trabajar con componentes: 

- Reutilizamos código. 
- Favorece la separación de responsabilidades. 
- El código es más fácil de entender. 
- Mejora el rendimiento de la aplicación. 

Caracteristicas Principales: 

- Renderizan un único elemento. 
- Pueden recibir props (propiedades).
- Pueden tener un estado.

¿Qué son las props? 
Las props son objetos que contienen datos que un componente necesita para renderizarse correctamente. Estas se envían de forma unidireccional  de componente padre a componente hijo. 


¿Qué es un estado? Es un objeto que contiene información del componente, y que puede cambiar durante la ejecución de la APP. 

El estado es un concepto de React y no de JS. Por eso para poder manipularlos vamos a tener que usar funciones que ya vienen incorporadas en la librería. Estas funciones se llaman HOOK. 


*/

import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  
  

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"Hola Comisión"} />
      


      {
        /*
        <h1 style={{color:"red"}}>Hola Mundo</h1>
        <h2 className='saludo' >Bienvenidos</h2>
        <TituloPrincipal saludo = {"Hola Comisión "} nombre = {"Samuel"} />
        <TituloPrincipal saludo = {"Lorem "} nombre = {"El Profe"} />
        <ItemCount/>


        */

      }
    </>
  )
}

export default App
