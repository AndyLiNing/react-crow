import './shop-styles.scss';

import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';
import { ProductCartComponent } from '../../components/product-card/product-cart.component';

export const ShopComponent = () => {

    const { products } = useContext(ProductsContext);

    return (
        <div className='products-container'>
            {
              products.map( product => <ProductCartComponent key={product.id} product = { product }/>)
            }
        </div>
    )
}