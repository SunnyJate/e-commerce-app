import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>

        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://www.nalli.com/media/catalog/product/b/e/be1289528_m.jpg?width=560&height=560&optimize=high&fit=bounds" alt="" />

        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-grey-900'>Green Paithani Silk Saree</h3>
            <p className='mt-2 text-sm text-grey-500'>Green Paithani Silk Saree with Zari Butta on the body and Zari Border. Includes unstitched blouse.</p>

        </div>
    </div>
  )
}

export default HomeSectionCard
