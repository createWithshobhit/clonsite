import React, {useEffect,useRef, useState}from 'react'

const Eyes = () => {
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
    <div  className='Eyes  relative w-full h-screen overflow-hidden '>
      <div data-scroll  data-scroll-speed="-1.7" className=' relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'></div>
      <div  className='absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex  gap-10'>
      <div className=' flex items-center justify-center h-[15vw] w-[15vw] bg-zinc-100 rounded-full'>
      <div className='flex relative items-center justify-center h-2/3 w-2/3 text-white bg-zinc-900 rounded-full'>
      <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}  className='line w-full rotate-45 h-10 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
      <div className='w-8 h-8 bg-zinc-200 rounded-full'></div>
      </div>
      
      </div>
      </div>
      <div className=' flex items-center justify-center h-[15vw] w-[15vw] bg-zinc-100 rounded-full'>
      <div className='flex relative items-center justify-center h-2/3 w-2/3 text-white bg-zinc-900 rounded-full'>
      <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full rotate-45 h-10 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='w-8 h-8 bg-zinc-200 rounded-full'></div>
      </div>
      
      </div>
      </div>


      </div>

    </div>
  )
}

export default Eyes
