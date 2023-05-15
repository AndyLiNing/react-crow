import './navigation.styles.scss';

import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/logo/crown.svg';
import { UserContext } from '../../contexts/user.context';

import { onUserSignOut } from '../../utils/firebase/firebase-utils';
import { CartIconComponent } from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../contexts/cart.context';
import { CartDropdownComponent } from '../../components/cart-dropdown/cart-dropdown.component';

export const NavigationComponent = () => {
    const { user } = useContext(UserContext);

    const { isCartOpen } = useContext(CartContext);
    return(
        <Fragment>

            <div className='navigation'>

                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {
                       user ?
                       (<span className='nav-link' onClick={onUserSignOut}>
                           SIGN OUT
                        </span>) :
                       (<Link className='nav-link' to='/sign-in'>
                       Sign in
                       </Link>)
                    }
                    <CartIconComponent />
                    { isCartOpen &&
                        <CartDropdownComponent />
                    }
                </div>

            </div>
            <Outlet/>
        </Fragment>
    )
}