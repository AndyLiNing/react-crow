import './authentication.styles.scss';

import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';

export const AuthenticationComponent = () => {
    return (
        <div className='authentication-container'>
            <SignInComponent/>
            <SignUpComponent/>
        </div>
    )
}