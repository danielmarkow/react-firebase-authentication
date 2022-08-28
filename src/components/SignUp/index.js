import { useState } from "react";
import { Link } from "react-router-dom";

import { FirebaseContext } from "../Firebase";
import * as ROUTES from "../../constants/routes";

function SignUpPage() {
    return (
        <>
            <h2>Sign Up</h2>
            <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={firebase}/>}
            </FirebaseContext.Consumer>
        </>
    );
};

const INITIAL_STATE = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
}

function SignUpForm({ firebase }) {
    const [userdata, setUserdata] = useState(INITIAL_STATE);

    const isInvalid =
      userdata.passwordOne !== userdata.passwordTwo ||
      userdata.passwordOne === '' ||
      userdata.email === '' ||
      userdata.username === '';

    function onSubmit(event) {
        const { username, email, passwordOne } = userdata;
        
        firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                setUserdata({...INITIAL_STATE});
            })
            .catch(error => {
                setUserdata({ error });
            });
        
        event.preventDefault();
    };

    function onChange(event) {
        setUserdata({...userdata, [event.target.name]: event.target.value});
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                name="username"
                value={userdata.username}
                onChange={onChange}
                type="text"
                placeholder="Full Name"
            />
            <input 
                name="email"
                value={userdata.email}
                onChange={onChange}
                type="text"
                placeholder="Email Address"
            />
            <input 
                name="passwordOne"
                value={userdata.passwordOne}
                onChange={onChange}
                type="password"
                placeholder="Password"
            /> 
            <input 
                name="passwordTwo"
                value={userdata.passwordTwo}
                onChange={onChange}
                type="password"
                placeholder="Confirm Password"
            />
            <button 
                type="submit"
                disabled={isInvalid}
            >Sign Up</button>
            {userdata.error && <p>{userdata.error.message}</p>}
        </form>
    );
}

function SignUpLink() {
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
}

export default SignUpPage;
export { SignUpForm, SignUpLink };
