import { Globe, Code, Layers } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Separator } from "./ui/separator";

const BitcoinSection = () => {
  const bitcoinResources = [
    {
      title: "Bitcoin Explorer",
      description: "Explore transactions and blocks on the Bitcoin blockchain",
      link: "https://www.blockchain.com/explorer",
      icon: <Globe className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Bitcoin Core",
      description: "Official Bitcoin software for full node operations",
      link: "https://bitcoincore.org/",
      icon: <Layers className="w-6 h-6 text-gray-500" />
    },
    {
      title: "Bitcoin Development",
      description:
        "Learn how to build on the Bitcoin network with resources for developers",
      link: "https://developer.bitcoin.org/",
      icon: <Code className="w-6 h-6 text-black" />
    },
    {
      title: "NFT Ecosystem on Bitcoin (Stacks)",
      description:
        "Explore the NFT ecosystem on Bitcoin using the Stacks platform",
      link: "https://www.hiro.so/",
      icon: <Layers className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Bitcoin Lightning Network",
      description: "A fast and scalable payment layer built on top of Bitcoin",
      link: "https://lightning.network/",
      icon: <Globe className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <section className="my-12 animate-fade-in text-black px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">
          Bitcoin Network & Resources
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-gray-500">
          Explore the Bitcoin blockchain, tools, development resources, and
          platforms for the world’s first decentralized cryptocurrency.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {bitcoinResources.map((resource) => (
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

export default BitcoinSection;
