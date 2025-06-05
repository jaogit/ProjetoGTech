// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Destaques from '../components/Destaques'; 
import ProductCard from '../components/ProductCard';
import ProductListing from '../components/ProductListing';

function Home() {
  return (
    <div className="home-page">
      <Gallery />
      <Destaques />

      <div className="pt-6 pb-10 sm:w-full lg:px-10 max-w-[1200px] mx-auto">

            <div className="hidden sm:flex justify-between items-center">
              <h2 className="text-lg font-bold text-[#474747]">
                Produtos em alta
              </h2>
              <Link to="/product" className="text-lg text-[#C92071] flex items-center gap-1">
                Ver todos
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4"
                    stroke="#C92071" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
        <div className="mt-10 gap-16 sm:flex hidden flex-wrap justify-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 flex justify-center">
              <ProductCard />
            </div>
          ))}
        </div>
    </div>
    </div>
  );
}

export default Home;