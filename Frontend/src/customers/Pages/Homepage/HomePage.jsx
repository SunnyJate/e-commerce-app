import React from 'react'
import MainCarosal from '../../components/HomeCarosal/MainCarosal';
import HomeSectionCarosal from '../../components/HomeSectionCarosal/HomeSectionCarosal';

const HomePage = () => {
  return (
    <div>
      <MainCarosal/>
      <div className='space-y-10- py-20 flex flex-col justify-center'>
        <HomeSectionCarosal/>
        <HomeSectionCarosal/>
        <HomeSectionCarosal/>
        <HomeSectionCarosal/>
        <HomeSectionCarosal/>
      </div>
    </div>
  )
}

export default HomePage
