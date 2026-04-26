import React from 'react'
import { useState } from 'react'

function App() {
  
  const [input, setInput]= useState("")
  

    const click =(value)=>{
      setInput((input)=>input+value)
      
    }
    const delte =()=>{
      setInput((input)=> input.slice(0, -1))
    }
    const clear=()=>{
      setInput((input)=>input="")
    }
    const result=()=>{
      try {
        const result = eval(input);
        setInput(result.toString())
      } catch (error) {
        setInput("Error")
      }
    }


  return (
      <div className='h-115 w-100 p-4 bg-gray-500/50 rounded-2xl backdrop-blur-2xl'>
      
      
      <div className='mb-4 flex justify-center items-center text-2xl font-bold'>Quantix</div>
       
       
        <div>
        <input
        value={input}
        readOnly 
        className='text-black caret-blue-700 text-2xl outline-none border-[3px] p-2 w-full  rounded-lg border-black' type="text" placeholder='0' /></div>
        <div className='flex flex-wrap mt-6 gap-6 items-center justify-center'>

        <div onClick={()=> {click("7")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>7</div>

        <div onClick={()=> {click("8")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>8</div>

         <div onClick={()=> {click("9")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>9</div>

        <div onClick={clear} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>C</div>


        <div  onClick={delte} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>❌</div>

         <div onClick={()=> {click("4")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>4</div>


        <div onClick={()=> {click("5")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>5</div>

        <div onClick={()=> {click("6")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>6</div>


        <div  onClick={()=> {click("/")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>➗</div>



        <button onClick={()=> {click("*")}}  className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>✘</button>


        <div onClick={()=> {click("1")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>1</div>


        <div onClick={()=> {click("2")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>2</div>


        <div onClick={()=> {click("3")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>3</div>


        <div onClick={()=> {click("-")}} aria-disabled={click==1}  className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>➖</div>

        <div onClick={()=> {click("+")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>➕</div>


        <div onClick={()=> {click("0")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>0</div>


        <div onClick={()=> {click(".")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-[10px] cursor-pointer hover:bg-blue-500 bg-blue-400'>⚫</div>


        <div onClick={()=> {click("(")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>(</div>

        <div onClick={()=> {click(")")}} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>)</div>

         <div onClick={result} className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>=</div>
        
      </div>


      </div>
  )
}

export default App