import React from 'react'
import qr from '../assets/qr.png'
import Title from '../components/Title'
const Contact = () => {
  return (
    <div>
       <div className='text-3xl text-center mt-8'>
        <Title text1={'CONTACT  '} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full h-96 md:max-w-[480px]' src={qr} alt="contact us" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p>Email:sneakergarage@gmail.com</p>
          <p>Tel:9810330979</p>
        </div>
      </div>
    </div>
  )
}

export default Contact