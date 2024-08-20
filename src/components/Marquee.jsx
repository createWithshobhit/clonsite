import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    
    <div data-scroll data-scroll-speed="1.5" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] '>
      <div className='text border-t-2 border-b-2 border-zinc-300  text-white overflow-hidden flex whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className=' text-[19vw] pr-20 leading-none font-["Founder_Grotesk"] -mt-[2vw] -mb-[2vw] font-semibold uppercase '>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className=' text-[19vw] pr-20 leading-none font-["Founder_Grotesk"] -mt-[2vw] -mb-[2vw] font-semibold uppercase '>WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className=' text-[19vw] pr-20 leading-none font-["Founder_Grotesk"] -mt-[2vw] -mb-[2vw] font-semibold uppercase '>WE ARE OCHI</motion.h1>
       
      </div>
    </div>
  )
}

export default Marquee
