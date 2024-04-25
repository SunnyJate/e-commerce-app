import React from 'react'
import MainCarosal from '../../components/HomeCarosal/MainCarosal';
import HomeSectionCarosal from '../../components/HomeSectionCarosal/HomeSectionCarosal';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomePage = () => {
  return (
    <div>
      <MainCarosal/>
      <div className='space-y-10- py-20 flex flex-col justify-center px-05 lg:px-10'>
        <HomeSectionCarosal data={mens_kurta}/>
        <HomeSectionCarosal data={mens_kurta}/>
        <HomeSectionCarosal data={mens_kurta}/>
        <HomeSectionCarosal data={mens_kurta}/>
        <HomeSectionCarosal data={mens_kurta}/>
      </div>
    </div>
  )
}

export default HomePage
