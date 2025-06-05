import React, { useState } from "react";

function ProductHeader({ totalResults, onSortChange }) {
  const [sortOption, setSortOption] = useState("menor");

  const handleChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSortChange(value);
  };

  return (
    <div className="flex justify-between items-center px-28">
      <span className="text-lg font-semibold">
        {totalResults} resultado{totalResults !== 1 ? "s" : ""}
      </span>

      <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-sm font-medium">
          Ordenar por:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
        >
          <option value="menor">Menor preço</option>
          <option value="maior">Maior preço</option>
        </select>
      </div>
    </div>
  );
}

export default ProductHeader;