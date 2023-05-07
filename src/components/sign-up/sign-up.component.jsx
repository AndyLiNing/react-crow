import './sign-up.styles.scss';

import { useState } from "react";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-utils";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";

export const SignUpComponent = () => {

    const signUpForm = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [signUpState, setSignUpState] = useState(signUpForm);
    const { displayName, email, password, confirmPassword} = signUpState;

    const onInput = (event ) => {
        const { name, value } = event.target;
        setSignUpState({
            ...signUpState,
            [name]: value
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert('Please check password and confirmPassword not match!');
            return;
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const { res } = await createUserDocumentFromAuth(user);
            console.log({res});
        } catch(e) {
            if(e.code === 'auth/weak-password') {
                alert('Password should be at least 6 characters');
            }
            console.log({e});
        }
    }

    return(
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmit}>
                <InputComponent
                    label='Display Name'
                    name='displayName'
                    required
                    type='text'
                    value={ displayName }
                    onInput={ onInput }
                />
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
                <InputComponent
                    label='Confirm Password'
                    name='confirmPassword'
                    required
                    type='password'
                    value={ confirmPassword }
                    onInput={onInput}
                />
                <ButtonComponent type='submit'> Sign Up</ButtonComponent>
            </form>

        </div>
    )
}