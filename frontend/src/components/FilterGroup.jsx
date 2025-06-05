import React, { useState } from "react";

function FilterGroup() {
  // Estado para os checkboxes
  const [filtros, setFiltros] = useState({
    adidas: true,
    balenciaga: false,
    kswiss: true,
    nike: false,
    puma: false,

    esporte: true,
    casual: false,
    util: false,
    corrida: false,

    masculino: true,
    feminino: true,
    unisex: false,

    novo: false,
    usado: false,
  });

  function handleChange(event) {
    const { id, checked } = event.target;
    setFiltros((prev) => ({ ...prev, [id]: checked }));
  }

  return (
    <div className="bg-white rounded-lg p-10 ml-10 mb-20 w-[308px] h-[710px] mt-2 max-w-xs overflow-y-auto">
      <h1 className="text-lg font-bold mb-2">Filtrar por</h1>

      <div className="mb-2">
        <h2 className="font-bold mb-3">Marca</h2>
        {["adidas", "balenciaga", "kswiss", "nike", "puma"].map((marca) => (
          <div key={marca} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={marca}
              checked={filtros[marca]}
              onChange={handleChange}
              className="w-4 h-4 mr-2"
            />
            <label htmlFor={marca}>{marca.charAt(0).toUpperCase() + marca.slice(1)}</label>
          </div>
        ))}
      </div>
<div className="mb-2">
        <h2 className="font-bold mb-3">Categoria</h2>
        {["esporte", "casual", "util", "corrida"].map((cat) => (
          <div key={cat} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={cat}
              checked={filtros[cat]}
              onChange={handleChange}
              className="w-4 h-4 mr-2"
            />
            <label htmlFor={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</label>
          </div>
        ))}
      </div>

      <div className="mb-2">
        <h2 className="font-bold mb-3">Gênero</h2>
        {["masculino", "feminino", "unisex"].map((gen) => (
          <div key={gen} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={gen}
              checked={filtros[gen]}
              onChange={handleChange}
              className="w-4 h-4 mr-2"
            />
            <label htmlFor={gen}>{gen.charAt(0).toUpperCase() + gen.slice(1)}</label>
          </div>
        ))}
      </div>

      <div className="mb-2">
        <h2 className="font-bold mb-3">Estado</h2>
        {["novo", "usado"].map((estado) => (
          <div key={estado} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={estado}
              checked={filtros[estado]}
              onChange={handleChange}
              className="w-4 h-4 mr-2"
            />
            <label htmlFor={estado}>{estado.charAt(0).toUpperCase() + estado.slice(1)}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterGroup;