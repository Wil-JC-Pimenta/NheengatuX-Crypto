import { Wallet } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card";

const wallets = [
  {
    name: "MetaMask",
    description: "The most popular Ethereum wallet",
    url: "https://metamask.io/",
    icon: "🦊"
  },
  {
    name: "Trust Wallet",
    description: "Multi-chain crypto wallet",
    url: "https://trustwallet.com/",
    icon: "💫"
  },
  {
    name: "Phantom",
    description: "The best Solana wallet",
    url: "https://phantom.app/",
    icon: "👻"
  },
  {
    name: "KuCoin Wallet",
    description: "Secure multi-chain wallet",
    url: "https://www.kucoin.com/wallet",
    icon: "🟢"
  }
];

const CryptoWallets = () => {
  return (
    <section className="mb-8 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Wallet className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold">Popular Crypto Wallets</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {wallets.map((wallet) => (
          <a
            key={wallet.name}
            href={wallet.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{wallet.icon}</span>
                  {wallet.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {wallet.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="w-full px-4 py-2 text-sm bg-primary rounded-md hover:bg-primary/90 transition-colors">
                  Visit Website
                </button>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CryptoWallets;
