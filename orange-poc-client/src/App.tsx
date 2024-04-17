import './App.css';
import { useRoutes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import React from 'react';

function App() {
    const element = useRoutes([
        {
            path: '/dashboard',
            element: <Dashboard />,
        },
        {
            path: '/',
            element: <Home />,
        },
    ]);

    return <React.Fragment>{element}</React.Fragment>;
}

export default App;
