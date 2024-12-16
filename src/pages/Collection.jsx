import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { PiGreaterThan } from 'react-icons/pi';
import Title from '../components/Title';
const Collection = () => {
  const { product } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filtersProduct,setFilterProducts] = useState([]);
  const [Category,setCategory] = useState([]);
  const [Subcategory,setSubCategory] = useState([]);
 
  useEffect(()=>{
    setFilterProducts(product);
  },[])

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t">
      {/* Sidebar with Filters */}
      <div className="min-w-60">
        <div
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}>
          <p>FILTERS</p>
          <PiGreaterThan
            className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}/>
        </div>

        {/* Category Filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden sm:block'}`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Men" />Men</label>
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Women" />
              Women
            </label>
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Kids" />
              Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filters */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? '' : 'hidden sm:block'
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Sneakers" />
              Sneakers
            </label>
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Boots" />
              Boots
            </label>
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Sports" />
              Sports
            </label>
          </div>
        </div>
      </div>

      {/* Main Content (Placeholder) */}
      <div className='flex-1'>
<div className='flex justify-between text-base sm:text-2xl mb-4'>
<Title text1={'ALL'} text2={'COLLECTION'}/>
<select className='border-2 border-black-300 text-sm px-1 h-10 cursor-pointer'>
  <option value="relavent">Sort by: Relavent</option>
  <option value="low-high">Sort by: Low to High</option>
  <option value="high-low">Sort by: High to Low</option>
</select>
</div>
{/*map products */}
{/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
{filtersProduct.map((product)=>(
  <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
))}
</div> */}
      </div>
      </div>
  );
};

export default Collection;
