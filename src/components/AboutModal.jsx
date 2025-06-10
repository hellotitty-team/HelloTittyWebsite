import React, { useState } from 'react';
import Modal from './Modal';
import TittyInfoModal from './TittyInfoModal';

const AboutModal = ({ isOpen, onClose }) => {
  const [isTittyModalOpen, setIsTittyModalOpen] = useState(false);

  const openTittyModal = () => {
    setIsTittyModalOpen(true);
  };

  const closeTittyModal = () => {
    setIsTittyModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="What the F is Hello Titty?">
        <div className="space-y-4">
          <p className="text-lg">
            Hello Titty is what happens when you take the world's most overexposed cuteness and give it a pair of cojones.
            It's a parody. A meme. A rebellion — in soft cotton.
          </p>

          <div className="space-y-2">
            <p>🚫 Most men reject Hello Kitty.</p>
            <p>🔁 Hello Titty flips that reaction.</p>
            <p>😂 It's funny.</p>
            <p>💬 It starts conversations.</p>
            <p>🛍 It's merch you actually want to wear.</p>
            <p>💸 And yeah — there's a token too.</p>
          </div>

          <div className="space-y-2">
            <p className="font-bold">🧠 Wait, there's a token?</p>
            <p>
              Yes. $TITTY is the meme-powered crypto behind the movement.
              Every merch sale fuels it: we buy and burn the token to make it rarer.
              The more the meme spreads, the more value flows back to holders.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-bold">🧷 It's not just a brand.</p>
            <p>It's a feeling you can't unsee.</p>
          </div>

          <div className="mt-6 flex justify-center">
            <button 
              onClick={openTittyModal}
              className="font-bold text-xl uppercase tracking-wider px-6 py-3 bg-yellow-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 transition-all duration-200"
            >
              Learn More About $TITTY
            </button>
          </div>
        </div>
      </Modal>
      
      <TittyInfoModal isOpen={isTittyModalOpen} onClose={closeTittyModal} />
    </>
  );
};

export default AboutModal; 