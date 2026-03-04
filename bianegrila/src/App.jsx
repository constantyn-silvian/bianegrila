import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
      <div className='w-full h-screen bg-linear-to-br bg-linear-to-br from-pink-800 to-purple-600 flex items-center justify-center p-4'>
        <div className="h-[95%] w-[95%] flex flex-col items-center justify-evenly gap-6 
                bg-linear-to-br from-pink-400 via-rose-400 to-fuchsia-500 
                text-white rounded-lg shadow-2xl p-0 border-3 border-white/30 ">

        <h1
          className="font-extrabold text-center drop-shadow-lg tracking-wide"
          style={{
            fontSize: 'clamp(1rem, 6vw, 4rem)',
          }}
        >
          🎀 La Mulți Ani 🎀
        </h1>

        <div className="w-11/12 md:w-3/4 h-2/3 
                  bg-white/20 backdrop-blur-lg 
                  rounded-3xl shadow-2xl 
                  border border-white/30 
                  flex items-center justify-center 
                  text-2xl font-semibold">
          Poze
        </div>

      </div>
    </div>
  )
}

export default App
