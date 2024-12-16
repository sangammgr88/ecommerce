import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './Productitem';

const BestSeller = () => {

  const {products} = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(()=>{
    const bestProduct = products.filter((item)=>(item.bestSeller));
    const data = setBestSeller(bestProduct)
    console.log("thi is the data",data)
  },[])
  return (
    <div className='my-5'>
      <div className='text-center text-3xl py-8'>
<Title text1={'BEST'} text2={'SELLERS'}/>
<p className='w-3/4 m-auto text-xs sm:text-base text-gray-600' >"Step Ahead in Style – Where Comfort Meets Trend!"</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
  bestSeller.map((item,index)=>(
    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
  ))
}
      </div>
      <p className="col-span-5 text-center">No bestsellers available.</p>
    </div>
  )
}

export default BestSeller