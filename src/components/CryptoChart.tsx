import TradingViewWidget from "react-tradingview-widget";
import { useState } from "react";

const CryptoChart = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<
    "BTC" | "ETH" | "SOL" | "BNB"
  >("BTC");

  return (
    <div className="glass-card p-6 rounded-lg mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Crypto Price</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedCrypto("BTC")}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCrypto === "BTC"
                ? "bg-primary text-white"
                : "bg-secondary text-foreground"
            }`}
          >
            BTC
          </button>
          <button
            onClick={() => setSelectedCrypto("ETH")}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCrypto === "ETH"
                ? "bg-primary text-white"
                : "bg-secondary text-foreground"
            }`}
          >
            ETH
          </button>
          <button
            onClick={() => setSelectedCrypto("SOL")}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCrypto === "SOL"
                ? "bg-primary text-white"
                : "bg-secondary text-foreground"
            }`}
          >
            SOL
          </button>
          <button
            onClick={() => setSelectedCrypto("BNB")}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCrypto === "BNB"
                ? "bg-primary text-white"
                : "bg-secondary text-foreground"
            }`}
          >
            BNB
          </button>
        </div>
      </div>
      <div className="h-[400px] w-full">
        <TradingViewWidget
          symbol={`BINANCE:${selectedCrypto}USDT`}
          theme="dark"
          locale="en"
          autosize
          hide_side_toolbar={false}
          allow_symbol_change={true}
          interval="D"
          toolbar_bg="#141413"
          enable_publishing={false}
          hide_top_toolbar={false}
          save_image={false}
          container_id="tradingview_chart"
        />
      </div>
    </div>
  );
};

export default CryptoChart;
