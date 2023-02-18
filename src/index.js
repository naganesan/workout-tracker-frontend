import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WorkoutContextProvider from './context/workoutContext'
import UserContextProvider from './context/userContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserContextProvider>
        <WorkoutContextProvider>
            <App />
        </WorkoutContextProvider>
      </UserContextProvider>
  </React.StrictMode>
);


