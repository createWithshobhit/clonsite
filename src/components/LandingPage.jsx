import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-speed="-.7" className='w-full h-screen bg-[#f1f1f1] pt-1 '>
      <div className='textstructure   mt-32 '>
        <div className='masker  '>
            <h1 className='uppercase text-[6.5vw] tracking-tighter text-left ml-10 font-[500] leading-[6vw] font-["Founders_Grotesk"]'>We Create</h1>
            </div>
            <div className='masker  flex items-center justify-normal'>
            <motion.div initial={{width:0}} animate={{width:"100px"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='h-[55px] w-[100px]  ml-10'>
              <img className='h-fll w-full rounded-lg bg-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
            </motion.div>
            <h1 className='uppercase text-[6.5vw] tracking-tighter text-left  font-medium leading-[6vw] font-["Founders_Grotesk"]'>EYE-OPENING</h1>
            </div>
            <div className='masker  '>
            <h1 className='uppercase text-[6.5vw] tracking-tighter text-left ml-10 font-medium leading-[6vw] font-["Founders_Grotesk"]'>presentations</h1>
            </div>
        <div className='border-t-[1px] mt-32 border-zinc-600 uppercase font-light text-sm flex justify-between items-center py-5 px-20'>
          {["For public and private companies","From The First Pitch To IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
            <div className='start flex items-center justify-center gap-2'>
              <div className='px-4 py-2 border-[1.5px] rounded-full border-zinc-700'>Start The Project</div>
              <div className='w-10 h-10 border-[1.5px]  border-zinc-700 rounded-full  flex items-center justify-center'>
                <span className=''><MdOutlineArrowOutward size={25} /></span></div>
            </div>
        </div>
     
     
     
      </div>
    </div>
  )
}

export default LandingPage
