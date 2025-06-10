import React from 'react';
import Modal from './Modal';

const TittyInfoModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="💸 What is $TITTY?">
      <div className="space-y-4">
        <p className="text-lg">
          $TITTY is the meme token behind the Hello Titty movement.
          You don't need to be a crypto bro to get it — here's the short version:
        </p>

        <div className="space-y-2">
          <p className="font-bold">✅ The Basics</p>
          <p>$TITTY is an Ethereum-based token.</p>
          <p>The original dev bailed.</p>
          <p>We took over the supply.</p>
          <p>Ownership is renounced. Liquidity is burned.</p>
          <p>It can't be rugged again.</p>
        </div>

        <div className="space-y-2">
          <p className="font-bold">🔁 How it works now</p>
          <p>We sell merch.</p>
          <p>The profits go to:</p>
          
            <p>🔥 Buying & burning $TITTY (makes it rarer)</p>
            <p>💧 Adding liquidity</p>
            <p>📢 Fueling the meme (marketing, rewards)</p>
          
          <p>You don't have to buy the token — but if you do, you're riding the meme from the inside.</p>
        </div>

        <div className="space-y-2">
          <p className="font-bold">🧠 Why it's smart</p>
          <p>No private wallet dumping</p>
          <p>No fake promises</p>
          <p>The community controls it</p>
          <p>It's fueled by something real: memes + merch</p>
        </div>

        <div className="mt-2">
          <p>You can just wear the shirt.</p>
          <p>Or you can hold the token too.</p>
          <p>Either way — you're in on the joke.</p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://app.uniswap.org/#/swap?outputCurrency=0x5B34B5032267e5D5a80b99a06B4b85716f404EA2" 
            className="font-bold text-center text-lg uppercase tracking-wider px-6 py-3 bg-yellow-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $TITTY Token
          </a>
          <a 
            href="https://www.youtube.com/watch?v=Rjq4mKRxoY0" 
            className="font-bold text-center text-lg uppercase tracking-wider px-6 py-3 bg-rose-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-rose-400 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to Buy (Newbie Guide)
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default TittyInfoModal; 