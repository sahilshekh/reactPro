import React, { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGenartor() {

    const [length,setLength]=useState(5)
    const [number,setNumber]=useState(false)
    const [char,setChar]=useState(false)
    const [password,setPassword]=useState("")

    const  genrator =useCallback(()=>{
        let pass=''
        let charector="ueaejeswaijhe;ijhre;iuwh"
        if(number) charector+="1267832768248"
        if(char) charector+="@#!%@&#"

        for (let index = 0; index <length; index++) {
            const random =Math.floor(Math.random()*charector.length+1)
           pass+=charector.charAt(random)
            
        }
        setPassword(pass)
    },[length,number,char])

    useEffect(()=>{
        genrator()
    },[length,number,char])

   const visuval =useRef(null)

    const copyText=useCallback(()=>{
        visuval.current?.select()
        window.navigator.clipboard.writeText(password)
    },[password])
  return (
    <>
    <h1>Password Generator</h1>
    <input type="text" value={password} ref={visuval} readOnly placeholder='Password' className='outline-none w-full py-1 px-3'/> <button onClick={copyText} style={{border:"1px solid gray"}}>copy</button>
    <input type='range' onChange={(e)=>{setLength(e.target.value)}}></input> <label>length:{length}</label>
    <input type='checkbox' defaultChecked={number} onChange={()=>{
        setNumber((prev)=>!prev)
    }}></input><label>number</label>
    <input type='checkbox' defaultChecked={char} onChange={()=>{
        setChar((prev)=>!prev)
    }}></input><label>Char</label>
    </>
  )
}

export default PasswordGenartor