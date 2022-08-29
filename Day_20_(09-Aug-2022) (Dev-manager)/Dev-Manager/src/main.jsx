import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import App from './routes/App';
import { AuthProvider } from './context/Auth.context';
import { ContactProvider } from './context/Contact.context';
import './index.css';

/**
 * Date: 09-08-2022
 * =======================
 * Dev Manager :
 *  CRUD
 *  Form Handling
 *  Remote API server connection and handling
 *  Routing
 *  Context API
 *  Authentication (Registration, Login, Logout)
 *  Advance login - forgot-password, password-reset, email - sending
 *  Image-upload, pagination
 *  Search Functionality
 *  Securely identify the user (Authorization)
 * 
 */

// ReactDOM.createRoot(document.getElementById('root')).render(
 
//     <ContactProvider>
//       <App />
//     </ContactProvider>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <ContactProvider>
            <App />
        </ContactProvider>
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
