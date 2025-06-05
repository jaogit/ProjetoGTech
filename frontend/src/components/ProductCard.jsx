import card from '../assets/card.jpeg';

function ProductCard({ 
  image = card, 
  category = "Tênis", 
  name = "Converse All-Star", 
  oldPrice = 200, 
  price = 100 
}) {
  return (
    <div className="w-full w-[18rem]">
      <img src={image} alt={name} className="w-full object-cover rounded" />
      <p className="text-gray-500 text-sm mt-2">{category}</p>
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-gray-400 line-through">${oldPrice}</span>
        <span className="text-black font-bold">${price}</span>
      </div>
    </div>
  );
}

export default ProductCard;