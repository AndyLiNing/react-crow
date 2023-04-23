import './navigation.styles.scss';

import { Fragment } from 'react';
import {Link, Outlet} from 'react-router-dom'

import { ReactComponent as  CrwnLogo } from '../../assets/logo/crown.svg'

export const NavigationComponent = () => {
    return(
        <Fragment>

            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
            </div>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
                <Link className='nav-link' to='/sign-in'>
                    Sign-in
                </Link>
            </div>
            <Outlet/>
        </Fragment>
    )
}