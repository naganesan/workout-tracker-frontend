import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import useUserContext from './hooks/useUsercontext';




function App() {

  const { currentUser } = useUserContext();

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>

      <div className="pages">
        <Routes>
          
            <Route path="/"
            element={currentUser ? <Home /> : <Navigate to="/login"/>}
          //  element={<Home/>}
           exact />

          <Route path="/login"
           element={!currentUser ? <Login /> : <Navigate to="/"/>}
          //  element={<Login/>}
           exact />

          <Route path="/signup"
            element={!currentUser ? <SignUp /> : <Navigate to="/"/> }
          //  element={<SignUp/>}
           exact />
          
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
