import { Star, Shield, Globe, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const NheengatuSection = () => {
  const [copySuccess, setCopySuccess] = useState(false); // Para controle do estado de cópia

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const nheengatuFeatures = [
    {
      title: "Token Symbol",
      description: "The symbol for NheengatuX Token is NGTX.",
      icon: <Star className="w-5 h-5 text-yellow-500" />
    },
    {
      title: "Max Supply",
      description: "The maximum supply is fixed at 50 million tokens.",
      icon: <Shield className="w-5 h-5 text-red-500" />
    },
    {
      title: "Scarcity and Value",
      description:
        "Fixed supply ensures scarcity and potential value appreciation.",
      icon: <Globe className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Cultural Significance",
      description: "Inspired by the rich cultural language of Nheengatu.",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    }
  ];

  const handleCopyClick = () => {
    const mintAddress = "mnthw9H7rjWiiamrcyVwErvfTPLKBN6WPQXL2DqrJQE";
    navigator.clipboard
      .writeText(mintAddress)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Feedback por 2 segundos
      })
      .catch(() => {
        setCopySuccess(false);
      });
  };

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
        <div className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] mx-auto mb-8 overflow-hidden rounded-full">
          <img
            src="/nheengatu.jpg"
            alt="Nheengatu Token"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          {nheengatuFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center justify-center gap-4 py-4 text-sm sm:text-base"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-500">
                  {feature.title}
                </h3>
                <p className="text-[#fff]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      <div className="text-center my-8">
        <a
          href="https://ngtdapp-front-end.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Token Data
        </a>
      </div>

      {/* Stripe Buy Button Integration */}
      <div className="text-center my-8">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Buy NheengatuX Token
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: ` 
              <stripe-buy-button
                buy-button-id="buy_btn_1QN4ANBN0vNsHNbfYQKUX4a1"
                publishable-key="pk_live_51QLtFpBN0vNsHNbfAPGWA9I6Zve4qxfnZUWLVNQzzKxBjIuoG70vhVnTAm2PqiuaaHzeAc0SADDmYounXurcg7bo00x2AY0NNH"
              >
              </stripe-buy-button>
            `
          }}
        />
      </div>

      <div className="my-8 text-center">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Mint Address
        </h3>
        <p className="text-muted-foreground max-w-3xl mx-auto text-gray-600">
          To mint your Nheengatu Tokens, use the following address:
        </p>
        <p className="font-mono text-lg text-[#fff]">
          mnthw9H7rjWiiamrcyVwErvfTPLKBN6WPQXL2DqrJQE
        </p>
        <button
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleCopyClick}
        >
          {copySuccess ? "Address Copied!" : "Copy Mint Address"}
        </button>
      </div>

      <div className="my-8 text-center">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Mint Information - Solana Explorer
        </h3>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-lg text-[#fff] font-semibold mb-2">
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

      <div className="my-8 text-center">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Tokenomics
        </h3>
        <p className="text-muted-foreground max-w-3xl mx-auto text-gray-600">
          Learn more about the tokenomics of NheengatuX and its structure by
          visiting the official page.
        </p>
        <br></br>
        <a
          href="https://nheengatutoken.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Tokenomics
        </a>
      </div>
    </section>
  );
};

export default NheengatuSection;
