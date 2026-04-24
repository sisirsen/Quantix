import React from 'react'
import { useState } from 'react'

function App() {

  return (
      <div className='h-100 w-100 p-4 bg-gray-500/50 rounded-2xl backdrop-blur-2xl '>

        <div><input className='text-black caret-blue-700 text-2xl outline-none border-[3px] p-2 w-full  rounded-lg border-black' type="text" placeholder='0' /></div>
      <div className='flex flex-wrap mt-6 gap-6 items-center justify-center'>

        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>7</div>

        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>8</div>

         <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>9</div>

        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>C</div>


        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>❌</div>

         <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>4</div>


        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>5</div>

        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>6</div>


        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>➗</div>



        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>✘</div>


        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>1</div>


        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>2</div>


        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>3</div>


        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>➖</div>

        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>➕</div>


        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>0</div>


        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-[10px] cursor-pointer hover:bg-blue-500 bg-blue-400'>⚫</div>


        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>(</div>

        <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>)</div>

         <div className='h-13 w-13 flex justify-center items-center rounded-2xl text-2xl cursor-pointer hover:bg-blue-500 bg-blue-400'>=</div>
        
      </div>


      </div>
  )
}

export default App