import { Link } from 'react-router-dom';
import FilterGroup from '../components/FilterGroup'; 
import ProductListing from '../components/ProductListing';
import ProductHeader from "../components/ProductHeader";

function ProductListingPage () {
  return (
    <div className="bg-[#F9F8FE] space-x-10 p-4">
    <ProductHeader />
    <div className="flex">
      <FilterGroup />
      <ProductListing />
    </div>
    </div>
  );
}

export default ProductListingPage;