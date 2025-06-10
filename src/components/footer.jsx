import React, { useState } from 'react';
import logo from '../img/titty-logo.svg';
import AboutModal from './AboutModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  
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
    <footer className=" shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-8">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Hello Titty Logo" className="h-120" />
        </div>
        
        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-4 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="flex">
                {link.isModal ? (
                  <button 
                    onClick={link.onClick}
                    className="bg-rose-300 text-black font-bold hover:bg-pink-400 px-4 py-2 border-2 border-black rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 flex items-center h-10"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a 
                    href={link.url}
                    target={link.isExternal ? "_blank" : "_self"}
                    rel={link.isExternal ? "noopener noreferrer" : ""}
                    className="bg-rose-300 text-black font-bold hover:bg-pink-400 px-4 py-2 border-2 border-black rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 flex items-center h-10"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Copyright Text */}
        <div className="text-center">
          <p className="font-bold bg-white inline-block px-4 py-2 border-2 border-black rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            © {currentYear} Hello Titty. All rights reserved. Don't steal our tits — or our code.
          </p>
        </div>
      </div>
      
      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} />
    </footer>
  );
};

export default Footer;
