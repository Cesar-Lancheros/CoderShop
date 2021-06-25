import { CartWidget } from './CartWidget'
export const NavBar = () =>{

    return(
                     
        <nav>
            <p> Store Cesar Lancheros </p>
            <ul>
                <li>Producto 1 </li>
                <li>Producto 2</li>
                <li>Producto 3</li>   
            </ul>
            <CartWidget/>

        </nav>
       
    )
}