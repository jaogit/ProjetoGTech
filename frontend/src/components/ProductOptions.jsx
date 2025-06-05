import React from 'react';
import { Link } from 'react-router-dom';


function ProductOptions({ imagens, imagemAtualIndex, setImagemAtualIndex }) {
  return (
  
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-4">
      {imagens.map((_, index) => (
        <button
          key={index}
          onClick={() => setImagemAtualIndex(index)}
          className={`w-4 h-4 rounded-full border-2 ${
            imagemAtualIndex === index
              ? "border-white bg-[#C92071]"
              : "bg-gray-600"
          }`}
          aria-label={`Selecionar imagem ${index + 1}`}
        ></button>
      ))}
    </div>
  );
}

export default ProductOptions;
