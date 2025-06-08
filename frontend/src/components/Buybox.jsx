import React, { useState } from "react";
import card from "../assets/card.jpeg";
import imagem from "../assets/imagem.jpeg";
import imagem2 from "../assets/imagem1.jpeg";
import imagem3 from "../assets/imagem2.jpeg";
import imagemDestaque from "../assets/imagemDestaque.jpeg";
import ProductCard from './ProductCard';
import { Link } from "react-router-dom";

const imagens = [card, imagemDestaque, imagem, imagem2, imagem3];

export default function GaleriaComDestaque() {
  const [imagemPrincipal, setImagemPrincipal] = useState(imagemDestaque);

  const tamanhos = [36, 37, 38, 39, 40];
  const [selecionado, setSelecionado] = useState(null);

    const cores = [
    { nome: "azul", cor: "bg-blue-600" },
    { nome: "rosa", cor: "bg-pink-600" },
    { nome: "preto", cor: "bg-black" },
    { nome: "roxo", cor: "bg-purple-600" },
  ];

  const [corSelecionada, setCorSelecionada] = useState(null);

  return (
    <div className="bg-[#F9F8FE]">
    <div className="p-10 flex">
      <div className="flex flex-col items-center space-y-6">
         <h2 className="text-lg font-medium mb-4 text-gray-600">
          Name / Products / Title / Size / Title title: Revolution & Next Nature Masculino
        </h2>
        {/* Imagem principal */}
        <img
          src={imagemPrincipal}
          alt="Imagem principal"
          className="w-[500px] max-w-4xl h-[500px] object-cover rounded-xl shadow-lg"
        />

        {/* Miniaturas */}
        <div className="flex justify-center gap-6 w-full overflow-x-auto">
          {imagens.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Miniatura ${index + 1}`}
              className={`w-20 h-20 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ${
                src === imagemPrincipal ? "ring-4 ring-blue-500" : ""
              }`}
              onClick={() => setImagemPrincipal(src)}
            />
          ))}
        </div>
      </div>

      <div className="p-4 mt-6">
        <h1 className="font-bold text-3xl mt-4 text-gray-800">
          Tênis Nike Revolution 6 Next Nature Masculino
        </h1>
        <p className="text-sm text-gray-500 mb-3">Grand Tour | 10/24/2021</p>
        <span className="text-2xl font-bold text-pink-600 mb-4">
          {219.00.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </span>
        <h5 className="text-sm text-gray-500 mb-3">Descrição do produto</h5>
        <h4 className="text-sm text-gray-800 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </h4>
        <p className="text-gray-500 mb-2">Tamanho</p>

        <div className="flex gap-4">
          {tamanhos.map((num) => (
            <div
              key={num}
              onClick={() => setSelecionado(num)}
              className={`w-10 h-10 flex items-center justify-center border rounded cursor-pointer 
  ${selecionado === num ? "bg-pink-600 text-white font-bold" : "bg-gray-200 text-black"}`}
            >
              {num}
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
      {cores.map(({ nome, cor }) => (
        <div
          key={nome}
          onClick={() => setCorSelecionada(nome)}
          className={`w-10 h-10 rounded-full cursor-pointer border-2
            ${cor} 
            ${corSelecionada === nome ? "ring-4 ring-offset-2 ring-pink-500" : "ring-0"}`}
          title={nome}
        />
      ))}
    </div>
    <button className="bg-[#C92071] mt-8 h-[48px] w-[220px] rounded-md text-white font-semibold transform hover:scale-110 transition-transform duration-300 ease-in-out"
    >
      COMPRAR
    </button>
      </div>
    </div>
    <div className="pt-6 sm:w-full lg:px-10 max-w-[1200px] mx-auto mb-10">

  <div className="hidden sm:flex justify-between items-center">
    <h2 className="text-lg font-bold text-[#474747]">PRODUTOS RELACIONADOS</h2>
    <Link to="/product" className="text-lg text-[#C92071] flex items-center gap-1">
      Ver todos
      <svg width="24" height="24" className="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4" stroke="#C92071" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
