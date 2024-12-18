import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LastestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-black'>"Where Every Step Tells a Story."</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((products) => (
          <div key={products.id} className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition">
            <img src={products.image} alt={products.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-sm sm:text-base font-semibold">{products.name}</h3>
            <p className="text-gray-500 text-xs sm:text-sm">${products.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastestCollection;
