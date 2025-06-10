import React, { useState, useEffect } from 'react';
import mugImg from '../img/mug.png';
import tankTopImg from '../img/tank-top.png';
import tshirtImg from '../img/tshirt.png';
import stringImg from '../img/string.png';

const Hero = () => {
  const [tokenData, setTokenData] = useState({
    name: "TITTY Token",
    symbol: "TITTY",
    price: "Loading...",
    marketCap: "Loading...",
    liquidity: "Loading...",
    buys: "Loading...",
    volume24h: "Loading..."
  });

  const fetchTokenData = async () => {
    try {
      const response = await fetch('https://api.dexscreener.com/latest/dex/pairs/ethereum/0x2138c059418104fe5555397bd50fe7d4e7e887ff');
      const data = await response.json();
      const pair = data.pairs[0];
      
      setTokenData({
        name: pair.baseToken.name,
        symbol: pair.baseToken.symbol,
        price: `$${Number(pair.priceUsd).toFixed(10)}`,
        marketCap: `$${Number(pair.marketCap).toLocaleString()}`,
        liquidity: `$${Number(pair.liquidity.usd).toLocaleString()}`,
        buys: `${pair.txns.h24.buys + pair.txns.h24.sells} (24h)`,
        volume24h: `$${Number(pair.volume.h24).toLocaleString()}`
      });
    } catch (error) {
      console.error('Error fetching token data:', error);
    }
  };

  useEffect(() => {
    // Fetch data immediately when component mounts
    fetchTokenData();
    
    // Set up interval to fetch data every minute
    const intervalId = setInterval(fetchTokenData, 60000);
    
    // Clean up interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Mock data for mugs
  const mugs = [
    { name: "TITTY Mug", price: "$24.99", image: mugImg },
    { name: "TITTY Tank Top", price: "$19.99", image: tankTopImg }
  ];

  // Mock data for t-shirts
  const tshirts = [
    { name: "TITTY Logo Tee", price: "$29.99", image: tshirtImg },
    { name: "TITTY Mini String", price: "$27.99", image: stringImg }
  ];

  return (
    <div className="w-full p-6">
      <div className="flex flex-col md:flex-row w-full mx-auto gap-6">
        {/* First Column - Token Information (40%) */}
        <div className="md:w-3/5 p-6 bg-yellow-50 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg transform transition-transform hover:-translate-y-1">
          <h2 className="text-3xl font-bold mb-4 text-black">TITTY Token</h2>
          <div className="space-y-3">
            {Object.entries(tokenData).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center border-b-2 border-black pb-2">
                <span className="font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span className="bg-white px-3 py-1 rounded-md border-2 border-black font-mono">{value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 mt-6 w-full">
            <a 
              href="https://app.uniswap.org/#/swap?outputCurrency=0x5B34B5032267e5D5a80b99a06B4b85716f404EA2"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-400 text-black font-bold py-2 px-4 rounded-md border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center"
            >
              Trade Now
            </a>
            <a 
              href="https://app.uniswap.org/explore/tokens/ethereum/0x5B34B5032267e5D5a80b99a06B4b85716f404EA2"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-400 text-black font-bold py-2 px-4 rounded-md border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center"
            >
              Add Liquidity
            </a>
            <a 
              href="https://etherscan.io/address/0x5B34B5032267e5D5a80b99a06B4b85716f404EA2"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-purple-400 text-black font-bold py-2 px-4 rounded-md border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center"
            >
              View Contract
            </a>
          </div>
        </div>

        {/* Second Column - Mugs (20%) */}
        <div className="md:w-2/5 p-6 bg-blue-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg transform transition-transform hover:-translate-y-1">
          <h2 className="text-3xl font-bold mb-4 text-black">Mugs</h2>
          <div className="space-y-4">
            {mugs.map((mug, index) => (
              <div key={index} className="bg-white p-4 rounded-md border-3 border-black">
                <div className="h-32 bg-gray-200 mb-3 flex items-center justify-center border-2 border-black overflow-hidden">
                  <img src={mug.image} alt={mug.name} className="object-contain h-full" />
                </div>
                <h3 className="font-bold">{mug.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-mono font-bold">{mug.price}</span>
                  <button 
                    disabled
                    className="bg-gray-300 text-gray-500 font-bold py-1 px-3 rounded border-2 border-black cursor-not-allowed"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Column - T-shirts (20%) */}
        <div className="md:w-2/5 p-6 bg-purple-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg transform transition-transform hover:-translate-y-1">
          <h2 className="text-3xl font-bold mb-4 text-black">T-shirts</h2>
          <div className="space-y-4">
            {tshirts.map((tshirt, index) => (
              <div key={index} className="bg-white p-4 rounded-md border-3 border-black">
                <div className="h-32 bg-gray-200 mb-3 flex items-center justify-center border-2 border-black overflow-hidden">
                  <img src={tshirt.image} alt={tshirt.name} className="object-contain h-full" />
                </div>
                <h3 className="font-bold">{tshirt.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-mono font-bold">{tshirt.price}</span>
                  <button 
                    disabled
                    className="bg-gray-300 text-gray-500 font-bold py-1 px-3 rounded border-2 border-black cursor-not-allowed"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
