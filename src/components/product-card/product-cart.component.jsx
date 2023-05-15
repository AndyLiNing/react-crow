import './product-cart.styles.scss';

import { ButtonComponent } from '../button/button.component';

export const ProductCartComponent = ({ product }) => {
    const { imageUrl, name, price} = product;
    return (
        <div className='product-card-container'>
            <img src = {imageUrl} alt = {name} />
            <div className='footer'>
                <span className = 'name'> { name }</span>
                <span className = 'price'> { price }</span>
            </div>
            <ButtonComponent buttonType='inverted'> Add To Cart</ButtonComponent>
        </div>
    )
}