import { useState } from "react"

export const ItemCount = () =>{
const [stock,setStock]= useState(Math.floor(Math.random()*(6-1))+1);  
const [cantidadActual,setCantidadActual] =useState (0)


const SumaResta = (operacion) => {
    var total
    if (operacion=='-' & cantidadActual>0){
        total= Number(cantidadActual-1)
        setCantidadActual(total)
    }

    else if (operacion=='+' & cantidadActual<stock )  {
        total= Number(cantidadActual+1)
        setCantidadActual(total)
    }
   
}
const OnAdd= () =>{
    alert('Productos agregados al carrito'  )
}

return(
    <div>
        <label>
            Cantidad de items
        </label>
        <button onClick={() => SumaResta('-')}  >
            -
        </button >
        <input value={cantidadActual}>
            
        </input>
    
        <button onClick={() => SumaResta('+')} >
            +
        </button>
        <button onClick={() => OnAdd()}>
            AGREGAR AL CARRITO
        </button>
        <label>
            Stock {stock}
        </label>
    </div>
          
        )
        }
    

    