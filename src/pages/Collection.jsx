import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { PiGreaterThan } from 'react-icons/pi';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filtersProducts,setFilterProducts] = useState([]);
  const [Category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);

  const toggleCategory = (e)=> {
    if(Category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item !== e.target.value))
    }else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () =>{
    let productsCopy = products.slice();

    if(Category.length > 0){
      productsCopy = productsCopy.filter(item => Category.includes(item.Category));
    }
    setFilterProducts(productsCopy)
  }
 
  useEffect(()=>{
    setFilterProducts(products);
  },[])

  useEffect(()=>{
   applyFilter();
  },[Category, subCategory])

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
        <input className="w-3" type="checkbox" value={"Men"} onChange={toggleCategory} />Men</label>
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value={"Women"} onChange={toggleCategory} />
              Women
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
              <input className="w-3" type="checkbox" value="Sneakers" onChange={toggleSubCategory}/>
              Sneakers
            </label>
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Boots" onChange={toggleSubCategory}/>
              Boots
            </label>
            <label className="flex gap-2 items-center">
              <input className="w-3" type="checkbox" value="Sandals" onChange={toggleSubCategory}/>
              Sandals
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
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
{filtersProducts.map((item,index)=>(
  <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
))}
</div>
      </div>
      </div>
  );
};

export default Collection;
