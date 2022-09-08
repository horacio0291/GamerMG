import React, {useState, useContext} from 'react'
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            })); 
        }else{
            setCart([...cart, {...item, quantity}]) //Si no está el item lo agrego y le sumo el campo quantity
        }
    }

    console.log(cart)

    const clear = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

    

  return (
    <CartContext.Provider value={{
        clear,
        isInCart,
        removeItem,
        addItem,
        
    }}>
        {children}
    </CartContext.Provider>
  )
}
