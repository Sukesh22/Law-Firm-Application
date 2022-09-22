import React from 'react';

// import image
import Image from '../assets/img/lawyer_banner.png';

// import components
import Header from './Header';
import Appointment from './Appointment';

const Banner = () => {
  return (
    <section
      id='home'
      className='lg:h-full lg:max-h-800 bg-gradient-to-t from-[#ecf0f1] to-[#2980b9]'
    >
      <Header />
      <div className='container mx-auto h-full lg:flex pt-32'>
        <div className='text-right mx-auto h-full lg:text-left px-8 md:p-0'>
          <h1 className='font-primary font-black text-6xl lg:text-8xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>
            We Fight for <br /> <span className='text-accent'>Your Right</span>
          </h1>
          <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>
            This Lawyer Application is a full service law firm with several years of experience under its belt.We are a full service law firm. Our motto is to serve prompt without compromising the quality of legal services that we provide
          </p>
          {/* Appointment */}
          <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'>
            <Appointment />
          </div>
        </div>
        {/* Banner Image */}
        <div className='hidden flex-1 lg:flex lg:flex-col items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Banner;