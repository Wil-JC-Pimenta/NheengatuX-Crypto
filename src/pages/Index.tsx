import MarketStats from "@/components/MarketStats";
import CryptoChart from "@/components/CryptoChart";
import PortfolioCard from "@/components/PortfolioCard";
import CryptoList from "@/components/CryptoList";
import CryptoWallets from "@/components/CryptoWallets";
import Blockchains from "@/components/Blockchains";
import DeFiSection from "@/components/DeFiSection";
import SolanaSection from "@/components/SolanaSection";
import EthereumSection from "@/components/EthereumSection";
import BitcoinSection from "@/components/BitcoinSection";
import BinanceSection from "@/components/BinanceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Crypto Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back to your portfolio
          </p>
        </header>

        <MarketStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CryptoChart />
          </div>
          <div>
            <PortfolioCard />
          </div>
        </div>

        <CryptoList />

        <CryptoWallets />

        <Blockchains />

        <DeFiSection />

        <BitcoinSection />

        <SolanaSection />

        <EthereumSection />

        <BinanceSection />
      </div>
    </div>
  );
};

export default Index;
