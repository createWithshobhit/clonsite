import React from 'react'

const Feature = () => {
  return (
    <div data-scroll  data-scroll-speed=".7" className='w-full pb-20  bg-[#f1f1f1]'>
      <div className='w-full    border-zinc-300 border-b-[1px]'>
      <h1 className='text-7xl text-left font-["Neue_Montreal"] tracking-tight  pt-32 pb-5'>Featured projects</h1></div>
      
      
      <div className='cardMain w-full   bg-[#f1f1f1]'>
  {/* card-1 */}
  <div className='card w-full  flex items-center justify-between gap-10 p-10'>
    <div className='cardContainer w-1/2 h-[80vh] relative overflow-hidden rounded-xl'>
      <div className='w-full h-full  rounded-xl relative group'>
        <img className='w-full h-full bg-cover rounded-xl transition-transform duration-500 ease-in-out transform group-hover:scale-90' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="Image" />
        <h1 className='absolute left-1/2 top-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 z-[999] font-["Founders_Grotesk"] font-semibold leading-none text-[#CDEA68] tracking-tighter text-8xl opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-90'>FYDE</h1>
      </div>
    </div>
    <div className='cardContainer w-1/2 h-[80vh] relative overflow-hidden rounded-xl'>
      <div className='w-full h-full  rounded-xl relative group'>
        <img className='w-full h-full bg-cover rounded-xl transition-transform duration-500 ease-in-out transform group-hover:scale-90' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="Image" />
        <h1 className='absolute left-1/2 bottom-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] font-["Founders_Grotesk"] font-semibold leading-none text-[#CDEA68] tracking-tighter text-5xl opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-90'>PREMIUM BLEND</h1>
      </div>
    </div>
  </div>

  {/* card-2 */}
  <div className='card w-full flex items-center justify-between gap-10 p-10'>
    <div className='cardContainer w-1/2 h-[80vh] relative overflow-hidden rounded-xl'>
      <div className='w-full h-full rounded-xl relative group'>
        <img className='w-full h-full bg-cover rounded-xl transition-transform duration-500 ease-in-out transform group-hover:scale-90' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="Image" />
        <h1 className='absolute bottom-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] font-["Founders_Grotesk"] font-semibold leading-none text-[#CDEA68] tracking-tighter text-8xl opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-90'>VISE</h1>
      </div>
    </div>
    <div className='cardContainer w-1/2 h-[80vh] relative overflow-hidden rounded-xl'>
      <div className='w-full h-full rounded-xl relative group'>
        <img className='w-full h-full bg-cover rounded-xl transition-transform duration-500 ease-in-out transform group-hover:scale-90' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="Image" />
        <h1 className='absolute bottom-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] font-["Founders_Grotesk"] font-semibold leading-none text-[#CDEA68] tracking-tighter text-8xl opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-90'>TRAWA</h1>
      </div>
    </div>
  </div>
</div>
       
     
    </div>
  )
}

export default Feature
