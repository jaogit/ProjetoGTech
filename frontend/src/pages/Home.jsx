// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Destaques from '../components/Destaques'; 
import ProductCard from '../components/ProductCard';
import laye from "../assets/laye.png";

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
    <div className="relative w-full h-[534px] bg-black overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full bg-gray-200">
             <div className="transition-transform duration-300 h-[400px] w-[734px] hover:rotate-3 ">
            <img
              src={laye}
              alt="Imagem do sapato"
              className="object-cover"
            />
          </div>
          <div className="flex-col relative items-center space-y-4 p-6 sm:pl-20 sm:py-40 w-full sm:w-[620px]">
            <p className="text-[#C92071] font-semibold">Oferta especial</p>
            <h5 className="text-[#474747] text-6xl font-semibold">Air Jordan edição de colecionador</h5>
            <p className="text-[#474747] text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
           <button
      onClick={() => navigate('/Product')}
      className="bg-[#C92071] h-[48px] w-[220px] rounded-md text-white font-semibold transform hover:scale-110 transition-transform duration-300 ease-in-out"
    >
      Ver Ofertas
    </button>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Home;