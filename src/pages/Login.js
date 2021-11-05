import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
import { signIn } from '../services/firebase';

const Login = (props) => {
    return (
        <>
            <Helmet>
                <title>Login | Que Como⚛️</title>
                <meta name="description" content="Bienvenido A Que Como, please login to begin" />
                <meta name="keywords" content="login page, authenticate, login to begin" />
            </Helmet>
            <StyledMain>
                <h1>Login</h1>
                <button onClick={signIn}>Sign in with Google</button>
            </StyledMain>
        </>
    );
};

export default Login;
