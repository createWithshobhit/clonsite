import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div  className='w-full  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
    <div className='w-full p-20'>  <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[4vw] tracking-tight text-left'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds,
         sell products, explain complex ideas, and hire great people.</h1></div>
    
    <div className='w-full h-[50vh]  border-t-[1px]  border-[#a1b562] pt-5 flex items-start justify-between'>
        <h1 className='pl-32 text-[1.5vw] '>What you can expect:</h1>
        <div className='w-[30vw] mr-32 flex flex-col gap-10 text-[1.2vw]'>
            <h2>
            We create tailored presentations to help you persuade your colleagues, clients, or investors.
             Whether it’s live or digital, delivered for one or a hundred people.</h2>
             <h2>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear,
                 convincing, and captivating.</h2> </div>
    </div>
    
    <div className='w-full border-t-[1px] flex items-start justify-between p-10  border-[#a1b562]'>
  <div className='w-1/2 flex flex-col items-start justify-start'>
    <h1 className='text-6xl'>Our approach:</h1>
    <button className='px-10 py-5 bg-zinc-900 rounded-full mt-5 uppercase flex items-center justify-center gap-5 text-white'>
      Read More
      <div className='h-3 w-3 bg-zinc-300 rounded-full'></div>
    </button>
  </div>

        <div className='w-1/2 flex flex-col items-end justify-center '>
        <img src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' alt='about-us' className='w-[60vw] h-[70vh] rounded-3xl'></img>
        </div>
    </div>
    
    </div>
  )
}

export default About
