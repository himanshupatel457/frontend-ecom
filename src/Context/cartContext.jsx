import { useEffect } from "react";
import { useContext, useState, createContext } from "react";





const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        const storedItem = localStorage.getItem('cart');
        if(storedItem) setCart(JSON.parse(storedItem))
    },[])



    return (
        <CartContext.Provider value={[cart,setCart]}>
            {children}
        </CartContext.Provider>
    )
}


//hook for auth

const useCart = () => useContext(CartContext);



export {CartProvider,useCart};