import { Star, Shield, Globe, CheckCircle } from "lucide-react";

const NheengatuSection = () => {
  const nheengatuFeatures = [
    {
      title: "Token Symbol",
      description: "The symbol for NheengatuX Token is NGTX.",
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Max Supply",
      description: "The maximum supply is fixed at 50 million tokens.",
      icon: <Shield className="w-6 h-6 text-red-500" />
    },
    {
      title: "Scarcity and Value",
      description:
        "Fixed supply ensures scarcity and potential value appreciation.",
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Cultural Significance",
      description: "Inspired by the rich cultural language of Nheengatu.",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    }
  ];

  return (
    <section className="my-12 animate-fade-in text-black px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">NheengatuX</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-green-500">
          NheengatuX is a tribute to the rich cultural heritage of the Amazonian
          indigenous peoples and the Nheengatu language, an ancient language
          that connects history and nature. The 'X' in NheengatuX represents the
          intersection of tradition with cutting-edge technology, symbolizing
          the convergence of indigenous wisdom with the modern worlds of
          Exchange, Crypto, Web3, DeFi, and Artificial Intelligence. This token
          paves the way for an inclusive future where innovation meets heritage,
          blending the power of AI with the resilience of cultural legacy.
        </p>
      </div>

      <div className="text-center mb-8">
        {/* Imagem com responsividade */}
        <img
          src="/nheengatu.jpg" // Caminho da imagem
          alt="Nheengatu Token"
          className="w-[450px] h-[450px] sm:w-[150px] sm:h-[150px] mx-auto rounded-lg mb-8" // Responsividade da imagem
        />

        {/* Descrições do token */}
        <div className="space-y-6">
          {nheengatuFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center justify-center gap-4"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-500">
                  {feature.title}
                </h3>
                <p className="text-[#fff]">{feature.description}</p>{" "}
                {/* Alterado para #fff */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enriquecendo o conteúdo */}
      <div className="my-8 text-center">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Why Choose NheengatuX Crypto?
        </h3>
        <p className="text-muted-foreground max-w-3xl mx-auto text-gray-600">
          NheengatuX Crypto is not just a digital asset; it represents a strong
          cultural heritage, promoting scarcity and long-term value. The token's
          structure is designed for community-driven growth, making it a perfect
          addition to any portfolio.
        </p>
      </div>

      {/* Botão para compra de Token */}
      <div className="text-center my-8">
        <a
          href="https://ngtdapp-front-end.vercel.app/" // Link para a compra do token
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Buy NheengatuX Crypto
        </a>
      </div>

      {/* Endereço do Mint */}
      <div className="my-8 text-center">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Mint Address
        </h3>
        <p className="text-muted-foreground max-w-3xl mx-auto text-gray-600">
          To mint your Nheengatu Tokens, use the following address:
        </p>
        <p className="font-mono text-lg text-[#fff]">
          {" "}
          {/* Alterado para #fff */}
          mnthw9H7rjWiiamrcyVwErvfTPLKBN6WPQXL2DqrJQE
        </p>
      </div>

      {/* Card da Solana Explorer */}
      <div className="my-8 text-center">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Mint Information - Solana Explorer
        </h3>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-lg text-[#fff] font-semibold mb-2">
            {" "}
            {/* Alterado para #fff */}
            Check Mint Details on Solana Explorer
          </h4>
          <p className="text-gray-400 mb-4">
            Use the link below to explore and track the minting process on the
            Solana blockchain:
          </p>
          <a
            href="https://explorer.solana.com/address/mnthw9H7rjWiiamrcyVwErvfTPLKBN6WPQXL2DqrJQE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Solana Explorer - Mint Address
          </a>
        </div>
      </div>
    </section>
  );
};

export default NheengatuSection;
