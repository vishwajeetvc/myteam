import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>,
)
