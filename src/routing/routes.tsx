// src/routes.tsx
import { RouteObject } from 'react-router-dom';
import Home from '../components/mainViews/home/Home';
import About from '../components/mainViews/about/About';
import tool from '../components/mainViews/tool/Tool';

const routes: RouteObject[] = [
    { path: '/', element: <Home /> },
    { path: '*', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/tool/:toolId', element: <tool /> },
];

export default routes;
