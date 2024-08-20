import React from 'react'

const BussCard = () => {
  return (
    <div data-scroll  data-scroll-speed="-0.8" className=' w-full flex gap-10 p-10  bg-[#f1f1f1]'> 
      <div className='cardcan h-[50vh] w-1/2'>
      <div className='card  relative w-full rounded-xl flex items-center justify-center  h-full bg-[#004D43]'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="img" />
        <button className='absolute px-5 py-2 border-2 text-[#90BC5D]  border-[#90BC5D] left-10 bottom-5 rounded-full'>&copy; 2019-2022</button>
      </div>
      </div>

      <div className='cardcan h-[50vh] flex items-center justify-center gap-5 w-1/2'>
      <div className='card  relative w-1/2 h-full rounded-xl flex items-center justify-center bg-[#161a19]'>
      <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
      <button className='absolute  text-sm px-2 py-2 border-2 text-[#90BC5D]  border-[#90BC5D] left-10 bottom-2 uppercase rounded-full'>Ratings 5.0 on Cluntch</button>
      
      </div>
      <div className='card w-1/2 p-20 relative h-full rounded-xl flex items-center justify-center bg-[#212121]'>
      <img className='bg-cover ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
      <button className='absolute text-sm px-2 py-2 border-2 text-[#90BC5D]  border-[#90BC5D] left-10 bottom-2 rounded-full'>business bootcamp alumini</button>
      
      </div>
      </div>
    </div>
  )
}

export default BussCard
