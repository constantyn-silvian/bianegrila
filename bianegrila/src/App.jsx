import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Picture from './components/picture.jsx'

function App() {

  const pictures = [
    {
      src: 'https://cdn.discordapp.com/attachments/1120794416442037332/1120794416827694090/IMG_20230624_205054.jpg',
      alt: 'Poza 1',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1120794416442037332/1120794416827694090/IMG_20230624_205054.jpg',
      alt: 'Poza 2',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1120794416442037332/1120794416827694090/IMG_20230624_205054.jpg',
      alt: 'Poza 3',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1120794416442037332/1120794416827694090/IMG_20230624_205054.jpg',
      alt: 'Poza 1',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1120794416442037332/1120794416827694090/IMG_20230624_205054.jpg',
      alt: 'Poza 2',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1120794416442037332/1120794416827694090/IMG_20230624_205054.jpg',
      alt: 'Poza 3',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1120794416442037332/1120794416827694090/IMG_20230624_205054.jpg',
      alt: 'Poza 1',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1120794416442037332/1120794416827694090/IMG_20230624_205054.jpg',
      alt: 'Poza 2',
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1120794416442037332/1120794416827694090/IMG_20230624_205054.jpg',
      alt: 'Poza 3',
    },
  ]
  return (
      <div className='w-full h-screen bg-linear-to-br from-pink-800 to-purple-600 flex items-center justify-center p-4'>
        <div className="h-[95%] w-[95%] flex flex-col items-center justify-evenly gap-6 
                bg-linear-to-br from-pink-400 via-rose-400 to-fuchsia-500 
                text-white rounded-lg shadow-2xl p-0 border-3 border-white/30 ">

        <h1
          className="font-extrabold text-center drop-shadow-lg tracking-wide"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
          }}
        >
          🎀 La Mulți Ani 🎀
        </h1>

        <div className="w-11/12 md:w-3/4 h-2/3 
                  bg-white/20 backdrop-blur-lg 
                  rounded-3xl shadow-2xl 
                  border border-white/30 
                  flex items-center justify-left gap-4 scroll-behavior-smooth 
                  text-2xl font-semibold text-center p-6 overflow-auto">
          {pictures.map((picture, index) => (Picture(picture, index)))}
        </div>
      </div>
    </div>
  )
}

export default App
