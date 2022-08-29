import { FirebaseContext } from "../Firebase";

function SignOutButtonBase({ firebase }) {
    return (
        <button type="button" onClick={firebase.doSignOut}>
            Sign Out
        </button>
    );
}

export default function SignOutButton() {
    return (
        <FirebaseContext.Consumer>
            {firebase => <SignOutButtonBase firebase={firebase}/>}
        </FirebaseContext.Consumer>
    );
}