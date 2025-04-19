import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import CreateTrip from './create-trip'
import { RouterProvider } from 'react-router-dom'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/sonner'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Viewtrip from './view-trip/[tripId]/index.jsx'
import MyTrips from './my-trips'
import About from "./page/about";
import { Contact } from 'lucide-react'
import PaymentPage from './payment/paymentpage'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  },
  {
    path:'/view-trip/:tripId',
    element:<Viewtrip/>
  },
  {
    path:'my-trips/',
    element:<MyTrips/>
  },
  {
    path: 'page/',
    element: <About /> // new route for About
  },
  {
    path: "/payment",
    element: <PaymentPage />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header/>
    <Toaster/>
    <RouterProvider router={router}></RouterProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
