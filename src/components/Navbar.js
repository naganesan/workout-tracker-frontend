import {Link} from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import useUserContext from '../hooks/useUsercontext'

const Navbar = () => {

    const {logout} = useLogout();
    const {currentUser} = useUserContext();


    function handleClick () {
        logout()
    }

    return ( 
        // <div className="container-fluid mt-2">
            <nav className='navbar  navbar-expand px-3 bg-dark '>

        <div className="container-fluid ">
            <Link to="/"><h1 className="navbar-brand text-white">NesanMedia</h1></Link>
            s
            
            <div className="nav  ">

                { currentUser && (
                <span className="loggeduser text-white mx-3 mb-0 ">
                    <p>{currentUser.email}</p>
                </span>)}

                { currentUser && (
                <div>
                <button className="btn btn-outline-success" onClick={handleClick} >LogOut</button>
                </div>)} 
         
            {!currentUser && (
            
                <li className="nav-item ">
                <Link to="/login" className='nav-link text-white '>Login</Link>
                </li>)}

            {!currentUser && (

                <li className="nav-item ">  
                <Link to="/signup" className='nav-link text-white'>SignUp</Link>
                </li> )}
            
                </div>
                </div>
            </nav>
        // </div>    
        
)}
 
export default Navbar;