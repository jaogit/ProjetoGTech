import { useState } from "react";
import sapato from "../assets/sapato.png";
import imagem1 from "../assets/imagem.jpeg";
import imagem2 from "../assets/imagem1.jpeg";
import imagem3 from "../assets/imagem2.jpeg";
import ProductOptions from "./ProductOptions";
import { useNavigate } from 'react-router-dom';

function Gallery() {
    const navigate = useNavigate();
  const imagens = [sapato, imagem1, imagem2, imagem3];
  const [imagemAtualIndex, setImagemAtualIndex] = useState(0);
  const isFirstImage = imagemAtualIndex === 0;

  return (
    <div className="relative w-full h-[734px] bg-black overflow-hidden">
      {isFirstImage ? (
        <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full bg-gray-200">
          <div className="flex-col relative items-center space-y-4 p-6 sm:pl-20 sm:py-40 w-full sm:w-[520px]">
            <p className="text-[#F6AA1C] font-semibold">Melhores ofertas personalizadas</p>
            <h5 className="text-black text-6xl font-semibold">Queima de estoque Nike 🔥</h5>
            <p className="text-[#474747] text-md">
              Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
            </p>
         <button
      onClick={() => navigate('/Product')}
      className="bg-[#C92071] h-[48px] w-[220px] rounded-md text-white font-semibold transform hover:scale-110 transition-transform duration-300 ease-in-out"
    >
      Ver Ofertas
    </button>
          </div>

          <div className="transition-transform duration-300 hover:rotate-3">
            <img
              src={sapato}
              alt="Imagem do sapato"
              className="h-[650px] w-[734px] object-cover"
            />
          </div>
        </div>
      ) : (
        <>
          <img
            src={imagens[imagemAtualIndex]}
            alt={`Imagem ${imagemAtualIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </>
      )}

      <ProductOptions
        imagens={imagens}
        imagemAtualIndex={imagemAtualIndex}
        setImagemAtualIndex={setImagemAtualIndex}
      />
    </div> 
  );
}

export default Gallery;
