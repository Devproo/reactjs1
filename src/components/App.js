 import React, { useEffect, useState,  } from "react" 
 import CountButton from "./CountButton/CountButton"
 import SearchBar from "./SearchBar/SearchBar"
import Button from "./Button/Button"



const App =  () => {
const [productsState, setProductsState] = useState([])
useEffect(() => {

    fetch('https://fakestoreapi.com/products')
            .then((res=>res.json())

            .then((productsArray)=>{
                const newProductsState = productsArray.map((product)=>{



                })



                
              setProductsState(newProductsState)
}, [])

   const hasProducts = productsState.length > 0

    return (
   <div>
    <button>hello</button>
   </div>

    )
}
export default App