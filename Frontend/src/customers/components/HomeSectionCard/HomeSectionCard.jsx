import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>

        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/o/4/xl-ask-004-ausk-original-imagqajzsgjnfe6t.jpeg?q=70" alt="" />

        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-grey-900'>AUSK </h3>
            <p className='mt-2 text-sm text-grey-500'>Men Striped Round Neck Cotton Blend Dark Green, Black T-Shirt</p>

        </div>
    </div>
  )
}

export default HomeSectionCard
