import React, {useEffect,useRef, useState}from 'react'

const Ies = () => {
    const [rotate,setRotate] = useState(0)
useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
        let mouseX = e.clientX
        let mouseY = e.clientY
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;
        var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI)
        setRotate(angle-180)
        
    })
})
  return (
    <div data-scroll  data-scroll-speed=".8" className='w-full h-screen relative bg-[#CDEA68]'>
        <div className='headings relative w-full pt-32'>
      <h1 className='text-9xl font-bold font-["Neue_Montreal"]  '>READY</h1>
      <h1 className='text-9xl font-bold font-["Neue_Montreal"]   '> TO START</h1>
      <h1 className='text-9xl font-bold font-["Neue_Montreal"]   '>THE PROJECT?</h1>

      <div className='eyeeffect z-[999] w-full absolute top-[3%]'>
      <div className='Eyes  relative w-full h-screen overflow-hidden '>
      <div className='absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex  gap-10'>
      <div className=' flex items-center justify-center h-[10vw] w-[10vw] bg-zinc-100 rounded-full'>
      <div className='flex relative items-center justify-center h-2/3 w-2/3 text-white bg-zinc-900 rounded-full'>
      <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}  className='line w-full rotate-45 h-10 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
      <div className='w-5 h-5 bg-zinc-200 rounded-full'></div>
      </div>
      
      </div>
      </div>
      <div className=' flex items-center justify-center h-[10vw] w-[10vw] bg-zinc-100 rounded-full'>
      <div className='flex relative items-center justify-center h-2/3 w-2/3 text-white bg-zinc-900 rounded-full'>
      <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full rotate-45 h-10 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='w-5 h-5 bg-zinc-200 rounded-full'></div>
      </div>
      
      </div>
      </div>
           </div>

      </div>

    </div>
    
</div>
<div className='button flex items-center justify-center '>
<button className='  px-2 py-2 border-2 flex items-center gap-5 justify-center border-zinc-900 mt-10 rounded-full'>Start The Project
<div className='h-3 w-3 bg-white rounded-full'></div>
</button>
      
</div>

</div>


  )
}

export default Ies
