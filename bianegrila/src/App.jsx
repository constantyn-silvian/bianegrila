import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Picture from './components/picture.jsx'
import { useEffect, useState, useRef, use } from 'react'

function App() {

  const [scrollX, setScrollX] = useState(0);
  const [pictures, setPictures] = useState([]);
  const [touchStartX, setTouchStartX] = useState(0);
  const [started, setStarted] = useState(false);
  const [random, setRandom] = useState(0);
  const containerRef = useRef(null);
  const audioRef = useRef(null);

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
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
        window.removeEventListener('click', playAudio);
        console.log('Audio started playing');
      }
    };
    window.addEventListener('click', playAudio);

    if(Math.random() * 100 <= 5)
    {
      setRandom(1);
      audioRef.current.src = `melodie1.mp3`;
    }
    else{
      setRandom(0);
      audioRef.current.src = `melodie0.mp3#t=16`;
    }
    
    const picturesNames = []
    for (let i = 1; i <= 49; i++) {
      if(i == 18)continue;
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
        {/* Audio element for background music */}
        <audio className='hidden' loop ref={audioRef}>
          <source src={`melodie${random}.mp3#t=16`} type="audio/mpeg" />
        </audio>

        {/* initial cover */}
        {!started && (
          <div onClick={()=>{setStarted(true)}} className="absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur-lg rounded-lg flex items-center justify-center z-10 cursor-pointer">
            <h1 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            }} className="font-bold italic text-center text-white/90 transition-all duration-1s hover:scale-110 drop-shadow-lg tracking-wide">
              Click anywhere! 🎉
            </h1>
          </div>
        )}
        {/* header and description */}
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <h1
            className="font-extrabold text-center drop-shadow-lg tracking-wide italic"
            style={{
              fontSize: 'clamp(2.3rem, 6vw, 4rem)',
            }}
          >
            🎀 La Mulți Anii  🎀
          </h1>
          <h2 className="font-bold italic text-xl" style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          }}>🎉BIAAA<span className='inline-block transform scale-x-[-1]'>🎉</span></h2>
          <p className="text-center italic text-lg" style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          }}>Să fie anul ăsta plin numai de băieți.🥳</p>
        </div>

          {/* photos container */}
        <div ref={containerRef} className="w-11/12 md:w-3/4 h-2/3 
                  bg-white/20 backdrop-blur-lg 
                  rounded-3xl shadow-2xl 
                  border border-white/30 
                  flex items-center justify-left scroll-behavior-smooth 
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
            {pictures.map((picture, index) => (
              <Picture key={index} src={picture.src} alt={picture.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
