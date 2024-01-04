import { useState } from "react"



 function Chai(){

  let [counter,setCounter]=useState(0)

  const Adding=()=>{
    if(counter>=5){
      counter=5
    }
    else{

      setCounter(counter+1)
    }
  }
  const Remove =()=>{
    if(counter<=0){
      counter=0
    }
    else{

      setCounter(counter-1)
    }
  }
  return(
    <>
  
      <h1 className="bg-green-400 text-black ">chai is ready  Sahil!</h1>
     <h2>counter {counter} </h2>
     <button onClick={Adding}> Add</button>
     <button onClick={Remove}> Remove</button>

    </>

  )
}

export default Chai