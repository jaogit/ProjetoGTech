// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductCard from './components/ProductCard';
import ProductListing from './components/ProductListing';
import Header from './components/Header';  // Importando o Header
import Footer from './components/Footer';  // Importando o Footer
import './index.css'; 
import ProductListingPage from './pages/ProductListingPage';

function App() {
  return (
    <BrowserRouter>
      {/* Header será exibido em todas as páginas */}
      <Header />
      
      <div className="content">
        {/* Rotas para as páginas Login, Cart e Home */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path='/Product' element={<ProductListingPage />} />
        </Routes>
      </div>

      {/* Footer será exibido em todas as páginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;