import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const trailCount = 5;
  const dots = useRef([]);
  const dotRefs = useRef([]);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    dots.current = Array(trailCount).fill({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      dots.current[0] = {
        x: mousePos.current.x,
        y: mousePos.current.y,
      };

      for (let i = 1; i < trailCount; i++) {
        const prev = dots.current[i - 1];
        const curr = dots.current[i];
        const ease = 0.1;
        const newX = curr.x + (prev.x - curr.x) * ease;
        const newY = curr.y + (prev.y - curr.y) * ease;
        dots.current[i] = { x: newX, y: newY };
      }

      for (let i = 0; i < trailCount; i++) {
        if (dotRefs.current[i]) {
          dotRefs.current[i].style.transform = `translate(${dots.current[i].x}px, ${dots.current[i].y}px) translate(-50%, -50%)`;
        }
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [trailCount]);

  return (
    <div className="bg-white mont relative">
      <header className="bg-[#ffffff] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-auto h-30" src="images/fox_light_blue.png" alt="" />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Features
              </a>

              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                A
              </a>

              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                B
              </a>

              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                C
              </a>
            </div>

            <a
              href="#"
              title=""
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-blue-300 hover:text-black focus:text-black focus:bg-blue-300 font-semibold text-white bg-black rounded-full"
              role="button"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      <section className="bg-[#ffffff] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8 flex items-center">
          <div className="flex flex-col space-y-4 w-full">
          <div className="reveal-container text-center" >
      <p className="flap-reveal text-base font-semibold tracking-wider text-blue-600 uppercase text-center">
        A Platform for your Future
      </p>
    </div>
            <div className="text-center lg:mt-10">
              <div className="reveal-container" style={{ '--delay': '0s' }}>
                <h1
                  className="flap-reveal text-9xl font-bold text-black leading-none"
                  style={{ '--delay': '0s' }}
                >
                  <span className="inline-flex items-center justify-center pl-8 pr-6 pt-1 pb-5 mr-4 bg-blue-500 text-white rounded-full">
                    Ace
                  </span>
                  your Interview,
                </h1>
              </div>
              
              <div className="reveal-container" >
                <span
                  className="flap-reveal block text-7xl font-bold text-black"
                  
                >
                  Every. Single. Time.
                </span>
              </div>
            </div>
            <div className="reveal-container text-center " >
      <p className="flap-reveal mt-4 text-base text-black lg:mt-8 sm:text-xl text-center ">
        Grow your career fast at Right place.
      </p>
    </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-blue-300 rounded-full lg:mt-16 hover:bg-blue-400 focus:bg-blue-400"
                role="button"
              >
                Join for free
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
            <div>
              <p className="mt-5 text-gray-600 text-center">
                Already joined us?{' '}
                <a href="#" className="text-black transition-all duration-200 hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 9999,
        }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (dotRefs.current[i] = el)}
            style={{
              position: 'absolute',
              width: 12,
              height: 12,
              borderRadius: '10%',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              transform: 'translate(-80%, -80%)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
