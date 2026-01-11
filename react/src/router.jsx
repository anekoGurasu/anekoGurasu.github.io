

import {createBrowserRouter, Navigate} from 'react-router-dom';
import Login from './views/login';
import Dashboard from './views/dashboard';
import NotFound from './views/notFound';
import Rules from './views/rules';
import Home from './views/Home';
import DefaultLayout from './components/layout/defaultLayout';
import GuestLayout from './components/layout/guestLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  },
  {
    path: '/login',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
  },
  {
    path: '/rules',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/rules',
        element: <Rules/>
      }
    ]
  },
  {
    path: '/home',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

export default router;
