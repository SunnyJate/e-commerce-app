import React from 'react'
import MainCarosal from '../../components/HomeCarosal/MainCarosal';
import HomeSectionCarosal from '../../components/HomeSectionCarosal/HomeSectionCarosal';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomePage = () => {
  return (
    <div>
      <MainCarosal/>
      <div className='space-y-10- py-20 flex flex-col justify-center px-05 lg:px-10'>
        <HomeSectionCarosal data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosal data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarosal data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosal data={mens_kurta} sectionName={"Wemen's Saree"}/>
        <HomeSectionCarosal data={mens_kurta} sectionName={"Wemen's Dress"}/>
      </div>
    </div>
  )
}

export default HomePage
