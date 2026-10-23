import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { CartProvider } from './store/CartContext';
import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </HashRouter>,
);
