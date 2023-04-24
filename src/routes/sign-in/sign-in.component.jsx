import {signIn} from "../../utils/firebase/firebase-utils";

export const SignInComponent = () => {
    return(
        <div>
            <button onClick={ signIn }>Sign in</button>
        </div>
    )
}