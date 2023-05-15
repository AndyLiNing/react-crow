import './cart-icon.styles.scss';

import { ReactComponent as CartIcon } from '../../assets/cart-icon/cart-icon.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';



export const CartIconComponent = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)
    const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={ toggleCartDropdown }>
            <CartIcon className='shopping-icon'/>
            <span className='item-count'> 0 </span>
        </div>
    )
}