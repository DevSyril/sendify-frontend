import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Dashbord from './Pages/Dashboard/Dashbord.jsx'
import 'react-toastify/dist/ReactToastify.css'
import Registration from './Pages/Registration/Registration.jsx'
import EmailVerification from './Pages/EmailVerification/EmailVerification.jsx'
import OtpCodeVerification from './Pages/OtpVerification/OtpCodeVerification.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/otp-check',
    element: <OtpCodeVerification />
  },
  {
    path: '/email-verification',
    element: <EmailVerification />
  },
  {
    path: '/dashboard',
    element: <Dashbord />
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
