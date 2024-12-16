import React from 'react'
import aboutpage from '../assets/aboutpage.jpg';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
const About = () => {
  return (
    <div>
    <div className='text-3xl text-center mt-8'>
        <Title text1={'ABOUT  '} text2={'US'}/>
      </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <div>
        <img className='w-full md:max-w-[450px]' src={aboutpage} alt="aboutus" />
      </div>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
     <p>At Sneaker Garage, we are passionate about providing the best quality shoes to sneaker enthusiasts and fashion-conscious individuals in Nepal. We are an online shoe store dedicated to bringing you a diverse selection of premium footwear from top global brands, offering both trendy designs and timeless classics. Our goal is to provide a seamless shopping experience with convenient online ordering, fast delivery, and exceptional customer service. Whether you're looking for everyday comfort or exclusive sneaker releases, we have something for everyone.</p>
     <b className='text-red-600 text-3xl'>Our Mission</b>
     <p>Sneaker Garage is to revolutionize the way people in Nepal shop for shoes by offering high-quality, stylish, and affordable footwear. We are committed to providing an extensive range of shoes that cater to different tastes and needs, ensuring our customers always have access to the best options. We aim to become Nepal's go-to destination for online shoe shopping, delivering an unmatched combination of quality, convenience, and customer satisfaction.</p>
      </div>
    </div>
    <div className='text-4xl py-4'>
<Title text1={'WHY '} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Quality Assurance:</b>
<p>We ensure top-quality footwear by sourcing premium materials and partnering with trusted brands. Each pair undergoes strict inspection for defects and sizing accuracy, guaranteeing customer satisfaction. Our commitment to quality ensures you receive durable, stylish shoes every time.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Convenience:</b>
<p>We make shoe shopping easy and hassle-free. Our online platform allows you to browse and purchase shoes from the comfort of your home. With fast delivery across Nepal, you can enjoy your new footwear in no time. Our user-friendly website and customer service team ensure a smooth and convenient shopping experience every time.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Exceptional Customer Service:</b>
<p>We are committed to providing outstanding customer service. Our team is always ready to assist you with product inquiries, size guidance, and any other questions you may have. We strive to ensure a smooth shopping experience, offering easy returns and exchanges, and fast responses to all customer concerns. Your satisfaction is our priority, and we are here to help every step of the way.</p>
      </div>
    </div>
    <NewsletterBox/>
    </div>
  )
}

export default About