// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';  // Importando o Header
import Footer from './components/Footer';  // Importando o Footer
import './index.css'; 

function App() {
  return (
    <BrowserRouter>
      {/* Header será exibido em todas as páginas */}
      <Header />
      
      <div className="content">
        {/* Rotas para as páginas Login e Home */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>

      {/* Footer será exibido em todas as páginas */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
