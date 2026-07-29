/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { News } from './pages/News';
import { Pricing } from './pages/Pricing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Account } from './pages/Account';
import { Policy } from './pages/Policy';
import { Checkout } from './pages/Checkout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Layout>
  );
}
