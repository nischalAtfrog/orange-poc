import './App.css';
import { useRoutes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/home';

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

    return <main>{element}</main>;
}

export default App;
