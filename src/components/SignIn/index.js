import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SignUpLink } from "../SignUp";
import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";

export default function SignInPage() {
    return (
        <div>
            <h2>Sign In</h2>
            <FirebaseContext.Consumer>
                {firebase => <SignInForm firebase={firebase}/>}
            </FirebaseContext.Consumer>
            <SignUpLink />
        </div>
    );
};

const INITIAL_STATE = {
    email: "",
    password: "",
    error: null,
};

function SignInForm({ firebase }) {
    const [ userdata, setUserdata ] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    function onSubmit(event) {
        const { email, password } = userdata;

        firebase.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                setUserdata({...INITIAL_STATE});
                navigate(ROUTES.HOME);
            })
    }

    function onChange(event) {
        setUserdata({...userdata, [event.target.name]: event.target.value});
    }

    const isInvalid = userdata.password === "" 
        || userdata.email === "";
    
    return (
        <form onSubmit={onSubmit}>
            <input 
                name="email"
                value={userdata.email}
                onChange={onChange}
                type="text"
                placeholder="Email Address"
            />
            <input 
                name="password"
                value={userdata.password}
                onChange={onChange}
                type="password"
                placeholder="Password"
            />
            <button disabled={isInvalid} type="submit">
                Sign In
            </button>
        </form>
    );
}