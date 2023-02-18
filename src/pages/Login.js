import { useState } from "react";
import {useLogin} from '../hooks/useLogin'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isloading} = useLogin();

    

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
        login(email,password)
    }

    return ( 
        <div className="login ">
            <div className="container ">
            <div className="loginc p-5 border border-dark  rounded-5  " >
                <form>
                <label htmlFor='email'>Email</label>
                <input 
                id='email'
                className="form-control mb-3 border-dark " 
                type='email'
                onChange={(e) => setEmail(e.target.value)}  
                value={email}
                />

                <label htmlFor='password'>Password</label>
                <input 
                id='password'
                className="form-control border-dark " 
                type='password'
                onChange={(e) => setPassword(e.target.value)}  
                value={password}
                />
                <button className="btn btn-success mt-5  loginbtn" disabled={isloading} onClick={handleSubmit}>Login</button>
                </form>
            </div>
            </div>
            {error && <div className="alert alert-danger mt-4" role="alert">{error}</div>}
        </div>
     );
}
 
export default Login;