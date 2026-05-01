import React from 'react'
import { useState, useEffect } from 'react'


function App() {
  
  const [input, setInput] = useState("")
  const[dark, setDark]=useState(false)

  useEffect(() => {
    if(dark===true){
      document.body.style.background = "linear-gradient(to right, gray, black)";
      document.body.style.color="white"
    } else{
      document.body.style.background = "linear-gradient(to bottom, #ec4899, #8b5cf6)"
      document.body.style.color="black"
    }
  }, [dark])

  const toggleDark=()=>{
    if (dark===true) {
      setDark(false)
    } else{
      setDark(true)
    }
  }

 let inputBox = {};

if (dark === true) {
  
  inputBox.color = "white";
  inputBox.border="3px solid white"
} else {
  inputBox.color = "black";
}

  
 
  
    const click =(value)=>{
      setInput(input=>input+value)
      
    }
    const delte =()=>{
      setInput((input)=> input.slice(0, -1))
    }
    const clear=()=>{
      setInput("")
    }
    const result=()=>{
      try {
        setInput(eval(input).toString())
      } catch (error) {
        setInput("Error")
      }
    }

  const keyClick=(e)=>{

    if (e.key === " ") {
    setInput("");
    e.preventDefault()
    return;
  }

    if (!isNaN(e.key)) {
    setInput(input => input + e.key);
  }
 
    else if (e.key==="Backspace") {
   setInput(input=>input.slice(0,-1))
  }
    else if (e.key==="+" ||e.key=== "." ||e.key=== "/" ||e.key=== "*" || e.key==="-") {
    setInput(input=>input+e.key)
  }
    else if (e.key==="Enter") {
    setInput(eval(input).toString())
  } 
}

  useEffect(() => {
    document.addEventListener("keydown", keyClick);
      return () => {
    document.removeEventListener("keydown", keyClick);
  }}, [keyClick])



  return (
    <div className='h-115 w-100 p-4 bg-gray-500/60 rounded-2xl backdrop-blur-2xl'>
      
      
    <div 
    type="button"  
    onKeyDown={(e) => {if (e.key === "Enter" || e.key === " ") 
    {e.preventDefault();}}} 
    className="flex justify-center outline-none"><button 
    onClick={toggleDark} 
    className='mb-4 text-2xl font-bold cursor-pointer  outline-none'>Quantix</button>
    </div>
       
    <div>
        <input
        value={input}
        style={inputBox}
        readOnly 
        className='text-black caret-blue-700 text-2xl outline-none border-[3px] p-2 w-full  rounded-lg border-black' type="text" placeholder='0' /></div>

    <div className='flex flex-wrap mt-6 gap-6 items-center justify-center '>

    <div onClick={()=> {click("7")}}  className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>7</div>

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


    <div onClick={()=> {click("-")}}  className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>➖</div>

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