import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Picture from './components/picture.jsx'
import { useEffect, useState, useRef, use } from 'react'

function App() {

  const [scrollX, setScrollX] = useState(0);
  const [pictures, setPictures] = useState([]);
  const [touchStartX, setTouchStartX] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollX(Math.max(0, containerRef.current.scrollLeft));
    }
  }

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].pageX);
  }

  const handleTouchMove = (e) => {
    const touchCurrentX = e.touches[0].pageX;
    const deltaX = touchStartX - touchCurrentX;
    scrollTo(scrollX + deltaX / 3);
  }

  const scrollTo = (index) => {
    if (containerRef.current) {
      if (index < 0) index = 0;
      containerRef.current.scrollLeft = index;
      setScrollX(index);
    }
  }
  useEffect(() => {
    const picturesNames = []
    for (let i = 1; i <= 20; i++) {
      picturesNames.push(`poza${i}.jpeg`)
    }

    const pics = [...picturesNames.map(name => ({
      src: `./assets/${name}`,
      alt: name,
    }))]
    setPictures(pics);
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        setScrollX(prev => {
          const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
          const newScroll = prev + 1 > maxScroll ? 0 : prev + 1;

          containerRef.current.scrollLeft = newScroll;
          return newScroll;
        });
      }

    }, 5);
    return () => clearInterval(interval);
  }, [])
  return (
    <div className='w-full h-screen bg-linear-to-br from-pink-800 to-purple-600 flex items-center justify-center'>
      <div className="h-[95%] w-[95%] relative flex flex-col items-center justify-evenly gap-6 
                bg-linear-to-br from-pink-400 via-rose-400 to-fuchsia-500 
                text-white rounded-lg shadow-2xl p-0 border-3 border-white/30 ">
        {/* confetti  */}
        {/* <h1 className={`absolute top-${3} left-4`} style={{
          fontSize: 'clamp(2rem, 8vw, 6rem)',
        }}>🎉</h1>
        <h1 className='absolute top-4 right-4 transform scale-x-[-1]' style={{
          fontSize: 'clamp(2rem, 8vw, 6rem)',
          top: 10,
        }}>🎉</h1> */}
        <div className="w-full h-1/4 flex flex-col items-center justify-center  ">
          <h1
            className="font-extrabold text-center drop-shadow-lg tracking-wide italic"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
            }}
          >
            🎀 La Mulți Ani  🎀
          </h1>
          <h2 className="font-bold italic text-xl" style={{
            fontSize: 'clamp(1.5rem, 5vw, 3rem)',
          }}>🎉BIAAA<span className='inline-block transform scale-x-[-1]'>🎉</span></h2>
        </div>
        <div ref={containerRef} className="w-11/12 md:w-3/4 h-2/3 
                  bg-white/20 backdrop-blur-lg 
                  rounded-3xl shadow-2xl 
                  border border-white/30 
                  flex items-center justify-left gap-4 scroll-behavior-smooth 
                  text-2xl font-semibold text-center p-6 overflow-hidden overflow-y-hidden
                  bg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onScroll={handleScroll}
          onWheel={(e) => {
            e.preventDefault();
            scrollTo(scrollX + e.deltaY / (3 / 2)); // vertical wheel → scroll orizontal
          }}>
          <div className="flex items-center justify-start gap-4 h-full bg-black/90 rounded-3xl p-4">
            {pictures.map((picture, index) => (Picture(picture, index)))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
