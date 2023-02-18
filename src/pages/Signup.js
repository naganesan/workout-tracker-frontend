import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import useUserContext from "../hooks/useUsercontext"


const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isloading} = useSignup();

    const {currentUser} = useUserContext();

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)

        signup(email,password)
    }

    return ( 
        <div className="signup ">
            <div className="container  ">
            <div className="signupc p-5 border border-dark  rounded-5  " >
                <form>
                <label htmlFor='email'>Email</label>
        
                <input 
                id='email'
                
                className="form-control  domain mb-3 border-dark " 
                
                type='email'
                onChange={(e) => setEmail(e.target.value)}  
                value={email}
                />

                <label htmlFor='password'>Password </label>
                <input 
                id='password'
                className="form-control border-dark " 
                type='password'
                onChange={(e) => setPassword(e.target.value)}  
                value={password}
                />
                <button className="btn btn-success mt-5  loginbtn"  disabled={isloading} onClick={handleSubmit}>SignUp</button>
                </form>
            </div>
            </div>
            {error && <div className="alert alert-danger mt-4" role="alert">{error}</div>}
            {currentUser && <h2>Logged In as : {currentUser.email}</h2>}
        </div>
     );
}
 
export default Signup;
