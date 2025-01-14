import { Globe, Code, Layers } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card"; // Certifique-se de que o caminho está correto
import { Separator } from "./ui/separator";

const BinanceSection = () => {
  const binanceResources = [
    {
      title: "Binance Explorer",
      description: "Explore transactions and blocks on the Binance Smart Chain",
      link: "https://bscscan.com/",
      icon: <Globe className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "DeFi Platforms on Binance Smart Chain",
      description: "Explore DeFi projects built on Binance Smart Chain",
      link: "https://defiLlama.com/chains/binance-smart-chain",
      icon: <Layers className="w-6 h-6 text-green-500" />
    },
    {
      title: "Binance Smart Chain Development",
      description: "Resources and tools for developing on Binance Smart Chain",
      link: "https://docs.bnbchain.org/",
      icon: <Code className="w-6 h-6 text-black" />
    },
    {
      title: "NFT Ecosystem on Binance",
      description: "Explore the NFT ecosystem on Binance Smart Chain",
      link: "https://www.binance.org/en/nft",
      icon: <Layers className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Binance Smart Chain with Solidity",
      description:
        "Learn how to develop on Binance Smart Chain using Solidity for high-performance applications",
      link: "https://docs.bnbchain.org/docs/smart-chain/developers/solidity/",
      icon: <Code className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <section className="my-12 animate-fade-in text-black px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">
          Binance Smart Chain & Resources
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-green-500">
          Explore the Binance Smart Chain, tools, and development resources for
          building on one of the fastest and most popular blockchains.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {binanceResources.map((resource) => (
          <Card
            key={resource.title}
            className="glass-card bg-transparent border-yellow-500 shadow-lg hover:shadow-yellow-700 transition-transform transform hover:scale-105"
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div>{resource.icon}</div>
                <CardTitle className="text-xl text-yellow-500">
                  {resource.title}
                </CardTitle>
              </div>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-700 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors"
              >
                Visit Resource
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BinanceSection;
