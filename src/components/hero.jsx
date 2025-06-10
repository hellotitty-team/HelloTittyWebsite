import React from 'react';
import TittyLogo from '../img/titty-logo.svg';
import TittySlogan from '../img/titty-slogan.svg';

const Hero = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Neobrutalism style elements - decorative shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-pink-500 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-400 -rotate-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-24 bg-green-400 rotate-45 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo above heading */}
          <div className="mb-8">
            <img src={TittyLogo} alt="Hello Titty Logo" className="mx-auto w-180" />
          </div>
          
          {/* Main headline with neobrutalism style */}
          <h1 className="text-7xl md:text-8xl font-black mb-6 text-black transform -rotate-2 relative inline-block">
            <span className="relative z-10 px-4 py-2 inline-block bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              HELLO TITTY
            </span>
          </h1>
          
          {/* Subheadline */}
          <div className="text-xl md:text-2xl font-bold mb-8 max-w-2xl mx-auto bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="mb-2">She's bold. She's banned. She's back.</p>
            <p>Cute got boring. Titty made it better.</p>
          </div>
          
          {/* Slogan image */}
          <div className="mb-8">
            <img src={TittySlogan} alt="Hello Titty Slogan" className="mx-auto w-96" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
