import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Error from './pages/error/Error'
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Analytics from './pages/analytics/Analytics'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import PrivateLayout from './components/private-layout/PrivateLayout'
import Profile from './pages/profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {index: true, element: <Home />},
      {path: 'login', element: <Login />},
      {path: 'register', element: <Register />},

      {
        path: '/', element: <PrivateLayout />,
        children: [
          {path: 'profile', element: <Profile />},
          {path: 'dashboard', element: <Dashboard />},
          {path: 'analytics', element: <Analytics />},
          {path: 'settings', element: <Settings />}
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
