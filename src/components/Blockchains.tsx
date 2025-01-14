import { Network } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const blockchains = [
  {
    name: "Bitcoin",
    description: "The first and most well-known cryptocurrency blockchain",
    marketCap: "$1T+",
    icon: "₿"
  },
  {
    name: "Ethereum",
    description: "Smart contract platform for decentralized applications",
    marketCap: "$500B+",
    icon: "Ξ"
  },
  {
    name: "Solana",
    description: "High-performance blockchain for fast transactions",
    marketCap: "$100B+",
    icon: "◎"
  },
  {
    name: "BNB Chain",
    description: "Binance Smart Chain for DeFi and dApps",
    marketCap: "$50B+",
    icon: "🟡"
  }
];

const Blockchains = () => {
  return (
    <section className="mb-8 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Network className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold">Major Blockchains</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blockchains.map((blockchain) => (
          <Card key={blockchain.name} className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{blockchain.icon}</span>
                {blockchain.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {blockchain.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Market Cap: <span className="text-foreground">{blockchain.marketCap}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blockchains;