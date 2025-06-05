import collection1 from '../assets/collection1.jpeg';
import collection2 from '../assets/collection2.jpeg';
import collection3 from '../assets/collection3.jpeg';

function Destaques() {
  return (
    <div className='mb-16'>
      <h2 className="text-center pt-12 text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Coleções em destaque
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">

        <div
          className="rounded-xl p-6 flex flex-col items-start max-w-[405px] w-full h-[251px] justify-start bg-cover bg-center relative"
          style={{ backgroundImage: `url(${collection1})` }}
        >
          <span className="bg-lime-200 text-black text-xs font-bold px-3 py-1 rounded-full mb-3 -mt-2">
            30% OFF
          </span>

          <button className="bg-white text-pink-600 font-bold py-2 px-6 rounded-lg shadow hover:bg-pink-50 transition mt-auto">
            Comprar
          </button>
        </div>

        <div
          className="rounded-xl p-6 flex flex-col items-start max-w-[405px] w-full h-[251px] justify-start bg-cover bg-center relative"
          style={{ backgroundImage: `url(${collection2})` }}
        >
          <span className="bg-lime-200 text-black text-xs font-bold px-3 py-1 rounded-full mb-3 -mt-2">
            30% OFF
          </span>
          <button className="bg-white text-pink-600 font-bold py-2 px-6 rounded-lg shadow hover:bg-pink-50 transition mt-auto">
            Comprar
          </button>
        </div>

        <div
          className="rounded-xl p-6 flex flex-col items-start max-w-[405px] w-full h-[251px] justify-start bg-cover bg-center relative"
          style={{ backgroundImage: `url(${collection3})` }}
        >
          <span className="bg-lime-200 text-black text-xs font-bold px-3 py-1 rounded-full mb-3 -mt-2">
            30% OFF
          </span>

          <button className="bg-white text-pink-600 font-bold py-2 px-6 rounded-lg shadow hover:bg-pink-50 transition mt-auto">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destaques;
