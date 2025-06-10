import React, { useState } from 'react';
import logo from '../img/logo.png';
import AboutModal from './AboutModal';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openAboutModal = () => {
    setIsAboutModalOpen(true);
  };

  const closeAboutModal = () => {
    setIsAboutModalOpen(false);
  };

  const navLinks = [
    { name: 'Telegram', url: 'https://t.me/HelloTittyOG', isExternal: true },
    { name: 'Twitter/X', url: 'https://x.com/hellotittyog', isExternal: true },
    { name: 'Contract', url: 'https://etherscan.io/address/0x5B34B5032267e5D5a80b99a06B4b85716f404EA2', isExternal: true },
    { name: 'Trade', url: 'https://app.uniswap.org/#/swap?outputCurrency=0x5B34B5032267e5D5a80b99a06B4b85716f404EA2', isExternal: true },
    { name: 'DexScreener', url: 'https://dexscreener.com/ethereum/0x2138c059418104fe5555397bd50fe7d4e7e887ff', isExternal: true },
    { name: 'Github', url: 'https://github.com/hellotitty-team', isExternal: true },
    { name: '?', isModal: true, onClick: openAboutModal },
  ];

  return (
    <nav className="p-4 pb-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Hello Titty Logo" 
            className="h-36 mr-4 transform -rotate-12 hover:rotate-0 transition-all duration-300"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.isModal ? (
              <button 
                key={link.name}
                onClick={link.onClick}
                className="font-bold text-xl uppercase tracking-wider px-4 py-2 bg-rose-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-rose-400 transition-all duration-200"
              >
                {link.name}
              </button>
            ) : (
              <a 
                key={link.name} 
                href={link.url}
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : ""}
                className="font-bold text-xl uppercase tracking-wider px-4 py-2 bg-rose-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-rose-400 transition-all duration-200"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="bg-red-400 border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 border-2 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.isModal ? (
                <button 
                  key={link.name}
                  onClick={link.onClick}
                  className="font-bold text-xl uppercase tracking-wider px-4 py-2 bg-yellow-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-all duration-200 text-center"
                >
                  {link.name}
                </button>
              ) : (
                <a 
                  key={link.name} 
                  href={link.url}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                  className="font-bold text-xl uppercase tracking-wider px-4 py-2 bg-yellow-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-all duration-200 text-center"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}

      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} />
    </nav>
  );
};

export default Navigation;
