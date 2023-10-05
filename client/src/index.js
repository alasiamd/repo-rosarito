import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <ChakraProvider>
  <React.StrictMode>
  <Auth0Provider
    domain="dev-g5p2cfdaidwx2qr2.us.auth0.com"
    clientId="ot2kjLYIht8Nmi3jtiSgvXbxpSDNeTww"
    
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
    </ChakraProvider>
    
);