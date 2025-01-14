import { Globe, Code, Layers } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Separator } from "./ui/separator";

const SolanaSection = () => {
  const solanaResources = [
    {
      title: "Solana Explorer",
      description: "Explore transactions and blocks on the Solana blockchain",
      link: "https://explorer.solana.com/",
      icon: <Globe className="w-6 h-6 text-purple-500" />
    },
    {
      title: "SolScan",
      description: "A powerful Solana blockchain explorer",
      link: "https://solscan.io/",
      icon: <Layers className="w-6 h-6 text-green-500" />
    },
    {
      title: "Solana Development",
      description: "Resources and tools for developing on Solana",
      link: "https://solana.com/developers",
      icon: <Code className="w-6 h-6 text-black" />
    },
    {
      title: "NFT Ecosystem on Solana",
      description:
        "Explore the NFT ecosystem on Solana with platforms like Magic Eden",
      link: "https://magiceden.io/",
      icon: <Layers className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Solana Development with Rust",
      description:
        "Learn how to develop on Solana using Rust for high-performance applications",
      link: "https://solana.com/tech",
      icon: <Code className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <section className="my-12 animate-fade-in text-black px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-purple-500">
          Solana Network & Resources
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-green-500">
          Explore the Solana blockchain, tools, and development resources for
          building on the fastest blockchain and vibrant NFT ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {solanaResources.map((resource) => (
          <Card
            key={resource.title}
            className="glass-card bg-transparent border-purple-500 shadow-lg hover:shadow-purple-700 transition-transform transform hover:scale-105"
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div>{resource.icon}</div>
                <CardTitle className="text-xl text-purple-500">
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
                className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
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

export default SolanaSection;
