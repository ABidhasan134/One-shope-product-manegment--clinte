import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './routers/router.jsx';
import AuthProvider from './context/authProvider.jsx';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
