import './Login.scss'
import { accessUrl } from "../../spotify";

const Login = ({handleClick}) => {
    return(
        <section  className="login">
            <h2>Login Page</h2>
            <a href={accessUrl} className="login__button">Test</a>
            
        </section>
    )
}

export default Login;