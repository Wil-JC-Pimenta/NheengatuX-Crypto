import { Wallet, Code2, Coins } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Separator } from "./ui/separator";

const DeFiSection = () => {
  const defiCategories = [
    {
      title: "Decentralized Exchanges (DEX)",
      description: "Trade cryptocurrencies without intermediaries",
      examples: [
        { name: "Uniswap", link: "https://uniswap.org/" },
        { name: "PancakeSwap", link: "https://pancakeswap.finance/" },
        { name: "Raydium", link: "https://raydium.io/" }
      ],
      icon: <Coins className="w-6 h-6" />
    },
    {
      title: "Lending Platforms",
      description: "Borrow and lend crypto assets with interest",
      examples: [
        { name: "Aave", link: "https://aave.com/" },
        { name: "Compound", link: "https://compound.finance/" },
        { name: "Solend", link: "https://solend.fi/" }
      ],
      icon: <Wallet className="w-6 h-6" />
    },
    {
      title: "Yield Farming",
      description: "Earn rewards by providing liquidity",
      examples: [
        { name: "Curve", link: "https://curve.fi/" },
        { name: "Yearn Finance", link: "https://yearn.finance/" },
        { name: "Orca", link: "https://www.orca.so/" }
      ],
      icon: <Code2 className="w-6 h-6" />
    }
  ];

  return (
    <section className="my-12 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Decentralized Applications & DeFi
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore the world of decentralized finance and applications built on
          blockchain technology. DeFi platforms enable financial services
          without traditional intermediaries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {defiCategories.map((category) => (
          <Card key={category.title} className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-primary">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-medium mb-2">Popular Platforms:</h4>
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example) => (
                  <a
                    key={example.name}
                    href={example.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary px-3 py-1 rounded-full text-sm hover:underline"
                  >
                    {example.name}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-secondary/30 rounded-lg p-8 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Why DeFi Matters</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-2">Financial Inclusion</h4>
              <p className="text-muted-foreground">
                Access financial services without traditional banking
                requirements, enabling global participation in the financial
                system.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Innovation & Efficiency</h4>
              <p className="text-muted-foreground">
                Smart contracts automate financial processes, reducing costs and
                enabling new financial products and services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeFiSection;
