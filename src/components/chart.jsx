import React from 'react';

const Chart = () => {
  return (
    <div className="w-full">
      {/* Card with header and buttons - chart iframe only shows inside on desktop */}
      <div className="p-6">
        <div className="w-full mx-auto">
          <div className="p-6 bg-pink-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg transform transition-transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
              <h2 className="text-3xl font-bold text-black">TITTY Price Chart</h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 w-full sm:w-auto">
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
                <a 
                  href="https://dexscreener.com/ethereum/0x2138c059418104fe5555397bd50fe7d4e7e887ff"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-yellow-400 text-black font-bold py-2 px-4 rounded-md border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center"
                >
                  Dexscreener
                </a>
              </div>
            </div>
            
            {/* Chart iframe for desktop - inside card */}
            <div className="hidden sm:block w-full rounded-md border-3 border-black overflow-hidden bg-gray-900">
              <div className="aspect-[16/9] w-full">
                <iframe 
                  src="https://dexscreener.com/ethereum/0x2138C059418104Fe5555397bD50fe7d4E7E887FF?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                  className="w-full h-full"
                  title="TITTY Token Price Chart"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart iframe for mobile - outside card, full width */}
      <div className="sm:hidden w-full">
        <div className="w-full rounded-md border-3 border-black overflow-hidden bg-gray-900">
          <div className="h-96 w-full">
            <iframe 
              src="https://dexscreener.com/ethereum/0x2138C059418104Fe5555397bD50fe7d4E7E887FF?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
              className="w-full h-full"
              title="TITTY Token Price Chart"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;