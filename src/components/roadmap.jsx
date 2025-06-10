import React from 'react';
import Tshirt from '../img/tshirt.svg';
import Cart from '../img/cart.svg';
import Cube from '../img/cube.svg';
import Arrows from '../img/arrows.svg';

const Roadmap = () => {
  return (
    <div className="p-4 md:p-8 font-bold">
      {/* Header */}
      <div className="mx-auto mb-8 md:mb-16 container">
        <div className="bg-purple-300 border-4 border-black rounded-xl p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
          <h1 className="text-3xl md:text-5xl font-black text-black">HELLO TITTY ROADMAP</h1>
        </div>
      </div>

      {/* Timeline with connecting line */}
      <div className="container mx-auto relative">
        {/* Horizontal connecting line (hidden on mobile, visible on md and up) */}
        <div className="hidden md:block absolute top-16 left-[16%] w-[68%] h-2 bg-black"></div>
        
        {/* Vertical connecting line (visible on mobile, hidden on md and up) */}
        <div className="md:hidden absolute left-[30px] top-[60px] w-2 h-[calc(100%-120px)] bg-black"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Step 1 - Shopping Cart */}
          <div className="flex md:flex-col items-start md:items-center w-full md:w-1/4 relative z-10 mb-12 md:mb-0">
            <div className="bg-purple-300 rounded-full w-16 h-16 md:w-32 md:h-32 flex items-center justify-center border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mr-4 md:mr-0 md:mb-6">
              <img src={Cart} alt="Cart" className="h-8 w-8 md:h-16 md:w-16" />
            </div>
            <div className="flex-1 md:text-center">
              <h2 className="text-xl md:text-3xl mb-1 md:mb-2">COMMUNITY TAKEOVER</h2>
              <p className="text-sm md:text-lg md:px-2">Token rescued. Meme reborn.</p>
            </div>
          </div>

          {/* Step 2 - T-Shirt */}
          <div className="flex md:flex-col items-start md:items-center w-full md:w-1/4 relative z-10 mb-12 md:mb-0">
            <div className="bg-purple-300 rounded-full w-16 h-16 md:w-32 md:h-32 flex items-center justify-center border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mr-4 md:mr-0 md:mb-6">
              <img src={Tshirt} alt="T-Shirt" className="h-8 w-8 md:h-16 md:w-16" />
            </div>
            <div className="flex-1 md:text-center">
              <h2 className="text-xl md:text-3xl mb-1 md:mb-2">MERCH STORE LAUNCH</h2>
              <p className="text-sm md:text-lg md:px-2">Web release. Integration with merch shop provider.</p>
            </div>
          </div>

          {/* Step 3 - Cube */}
          <div className="flex md:flex-col items-start md:items-center w-full md:w-1/4 relative z-10 mb-12 md:mb-0">
            <div className="bg-purple-300 rounded-full w-16 h-16 md:w-32 md:h-32 flex items-center justify-center border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mr-4 md:mr-0 md:mb-6">
              <img src={Cube} alt="Cube" className="h-8 w-8 md:h-16 md:w-16" />
            </div>
            <div className="flex-1 md:text-center">
              <h2 className="text-xl md:text-3xl mb-1 md:mb-2">TITTY HUB</h2>
              <p className="text-sm md:text-lg md:px-2">Implement profit distribution script. Buybacks and burns. Make $TITTY deflationary.</p>
            </div>
          </div>

          {/* Step 4 - Arrows Up */}
          <div className="flex md:flex-col items-start md:items-center w-full md:w-1/4 relative z-10">
            <div className="bg-purple-300 rounded-full w-16 h-16 md:w-32 md:h-32 flex items-center justify-center border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] mr-4 md:mr-0 md:mb-6">
              <img src={Arrows} alt="Arrows" className="h-8 w-8 md:h-16 md:w-16" />
            </div>
            <div className="flex-1 md:text-center">
              <h2 className="text-xl md:text-3xl mb-1 md:mb-2">MEME REVIVAL ENGINE</h2>
              <p className="text-sm md:text-lg md:px-2">Launch incentives for $TITTY holders; explore optional add-ons.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
