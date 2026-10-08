import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Header } from './modules/shared/components/Header';

export const App = () => (
  <div className="App">
    <Header />

    <main>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/phones" element={<h1>Phones</h1>} />
        <Route path="/tablets" element={<h1>Tablets</h1>} />
        <Route path="/accessories" element={<h1>Accessories</h1>} />
        <Route path="/favorites" element={<h1>Favorites</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </main>
  </div>
);
