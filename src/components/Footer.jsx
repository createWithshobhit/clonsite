import React from 'react';

const Footer = () => {
  return (
    <div data-scroll  data-scroll-speed="1.5" className=' h-screen w-full bg-[#F1F1F1] text-gray-800 py-10'>
      <div className='container mx-auto px-4'>
        {/* Main Heading */}
        <h1 className='text-6xl font-bold text-center mb-6'>Eye-Opening Presentations</h1>

        {/* Flex Container for Columns */}
        <div className='flex flex-wrap justify-between mt-8'>
          {/* Navigation Links Column */}
          <div className='flex-1 min-w-[200px] mb-8'>
            <h2 className='text-2xl font-semibold mb-2'>M:</h2>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:text-gray-700'>Home</a></li>
              <li><a href="#" className='hover:text-gray-700'>Services</a></li>
              <li><a href="#" className='hover:text-gray-700'>Our Work</a></li>
              <li><a href="#" className='hover:text-gray-700'>About Us</a></li>
              <li><a href="#" className='hover:text-gray-700'>Insights</a></li>
              <li><a href="#" className='hover:text-gray-700'>Contact Us</a></li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className='flex-1 min-w-[200px] mb-8'>
            <h2 className='text-2xl font-semibold mb-2'>S:</h2>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:text-gray-700'>Instagram</a></li>
              <li><a href="#" className='hover:text-gray-700'>Behance</a></li>
              <li><a href="#" className='hover:text-gray-700'>Facebook</a></li>
              <li><a href="#" className='hover:text-gray-700'>LinkedIn</a></li>
            </ul>
          </div>

          {/* Location Column */}
          <div className='flex-1 min-w-[200px] mb-8'>
            <h2 className='text-2xl font-semibold mb-2'>L:</h2>
            <ul className='space-y-2'>
              <li>202-1965 W 4th Ave</li>
              <li>Vancouver, Canada</li>
              <li>30 Chukarina St</li>
              <li>Lviv, Ukraine</li>
            </ul>
          </div>

          {/* Email Column */}
          <div className='flex-1 min-w-[200px] mb-8'>
            <h2 className='text-2xl font-semibold mb-2'>E:</h2>
            <a href="mailto:hello@ochi.design" className='hover:text-gray-700'>hello@ochi.design</a>
          </div>
        </div>

        {/* Legal Terms */}
        <div className='text-center mt-10'>
          <p className='text-sm'>© ochi design 2024. Legal Terms</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
