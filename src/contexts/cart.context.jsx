import { createContext, useState } from 'react';

// Should return the newly created cartItems array
const addToCart = (cartItems, product) => {

}

export const CartContext = createContext({
    isCartOpen: null,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (product) => setCartItems(addToCart(cartItems, product));

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };
    return <CartContext.Provider value={ value }> { children }</CartContext.Provider>
}
