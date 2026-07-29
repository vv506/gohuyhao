import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import App from './App.tsx';
import './index.css';

document.title = "Nội thất gỗ Huy Hào";

// Dynamically set favicon to ensure it bypasses any caching
const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
link.type = 'image/jpeg';
link.rel = 'icon';
link.href = '/img/logo.jpg?v=' + new Date().getTime();
document.getElementsByTagName('head')[0].appendChild(link);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
