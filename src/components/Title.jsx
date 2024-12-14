import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-2'>
      <p className='text-red-700'>{text1}<span className='text-red-500-700 font-medium'>{text2}</span></p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[1px] bg-red-600'></p>
    </div>
  )
}

export default Title