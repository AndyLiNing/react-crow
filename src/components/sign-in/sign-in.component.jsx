import './sign-in.styles.scss';

import { useState } from 'react';

import {
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
    signInWithGoogle
} from '../../utils/firebase/firebase-utils';

import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

export const SignInComponent = () => {

    const signInForm = {
        email: '',
        password: '',
    }

    const [signInState, setSignInState] = useState(signInForm);
    const { email, password } = signInState;

    const onInput = (event ) => {
        const { name, value } = event.target;
        setSignInState({
            ...signInState,
            [name]: value
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            await signInAuthUserWithEmailAndPassword(email, password);
        } catch(e) {
            console.log({e});
        }
    }

    const onSignInWithGoogle = async () => {
        try{
            const resSignInWithGoogle = await signInWithGoogle();
            await createUserDocumentFromAuth(resSignInWithGoogle.user)
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmit}>

                <InputComponent
                    label='Email'
                    name='email'
                    required
                    type='email'
                    value={ email }
                    onInput={ onInput }
                />
                <InputComponent
                    label='Password'
                    name='password'
                    required
                    type='password'
                    value={ password }
                    onInput={ onInput }
                />
                <div className='buttons-container'>
                    <ButtonComponent type='submit'>Sign In</ButtonComponent>
                    <ButtonComponent type='button' buttonType='google' onClick={onSignInWithGoogle}>
                        Google sign in
                    </ButtonComponent>
                </div>
            </form>
        </div>
    )
}