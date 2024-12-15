import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (event
  )=>{
event.preventDefault();
  }
  return (
    <div className='text-center'>
       <p className='text-2xl font-medium text-gray-800'>Register & get 25% off</p>
       <p></p>
       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' />
        <button type='submit' className='bg-red-600 text-white text-xs px-10 py-4'>Register</button>
       </form>
    </div>
  )
}

export default NewsletterBox