import './Login.scss'
import { accessUrl } from "../../spotify";
import { Link } from "react-router-dom";
import logo from '../../assets/moodify.png'

const Login = ({handleClick}) => {
    return(
        <header className="App-header">
            <a href={accessUrl} className="login__button"><img src={logo} className="App-logo" alt="logo" /></a>
        </header>
    )
}

export default Login;