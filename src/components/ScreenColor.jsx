import React, { useState } from 'react'

function ScreenColor() {

    const [color,setColor]=useState("black")
  return (
    <div className='w-full h-screen duration-500' style={{backgroundColor:color}}>
          <div className='fixed flex flex-wrap justify-centre bottom-12 insert-x-0 px-2'>
          <div style={{backgroundColor:"red",border:"2px solid white",color:"white"}} className='flex flex-wrap justify-centre  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    <button  onClick={()=>{setColor("red")}} > Red</button>

          </div>

          <div style={{backgroundColor:"gray",border:"2px solid white",color:"white"}} className='flex flex-wrap justify-centre  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
       <button  onClick={()=>{setColor("gray")}} > Gray</button>
 
          </div>


          <div style={{backgroundColor:"green",border:"2px solid white",color:"white"}} className='flex flex-wrap justify-centre  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
       <button  onClick={()=>{setColor("green")}} > Green</button>
 
          </div>
          </div>
    </div>
  )
}

export default ScreenColor