import { Globe, Code, Layers, Box } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Separator } from "./ui/separator";

const EthereumSection = () => {
  const ethereumResources = [
    {
      title: "Ethereum Explorer",
      description: "Explore transactions and blocks on the Ethereum blockchain",
      link: "https://etherscan.io/",
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: "DeFi Platforms",
      description: "Explore DeFi projects built on Ethereum",
      link: "https://defillama.com/",
      icon: <Layers className="w-6 h-6 text-green-500" />
    },
    {
      title: "Ethereum Development",
      description: "Resources for developers building on Ethereum",
      link: "https://ethereum.org/developers/",
      icon: <Code className="w-6 h-6 text-black" />
    },
    {
      title: "NFT Ecosystem",
      description: "Learn about the vibrant NFT ecosystem on Ethereum",
      link: "https://opensea.io/",
      icon: <Box className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Solidity Development",
      description:
        "Resources for learning Solidity and smart contract development",
      link: "https://soliditylang.org/",
      icon: <Code className="w-6 h-6 text-yellow-500" />
    }
  ];

  return (
    <section className="my-12 animate-fade-in text-black px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">
          Ethereum Network & Resources
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-green-500">
          Explore the Ethereum blockchain, tools, and development resources for
          building on the leading smart contract platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {ethereumResources.map((resource) => (
          <Card
            key={resource.title}
            className="glass-card bg-transparent border-blue-500 shadow-lg hover:shadow-blue-700 transition-transform transform hover:scale-105"
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div>{resource.icon}</div>
                <CardTitle className="text-xl text-blue-500">
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
                className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
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

export default EthereumSection;
