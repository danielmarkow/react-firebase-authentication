import { 
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from "../../constants/routes";

export default function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <hr />
                <Routes>
                    <Route exact path={ROUTES.LANDING} element={<LandingPage />} />
                    <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
                    <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
                    <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForgetPage />} />
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
                    <Route path={ROUTES.ADMIN} element={<AdminPage />} />
                </Routes>
            </div>
        </Router>
    );
}