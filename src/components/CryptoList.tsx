// Importing necessary icons from lucide-react for displaying price variations
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

// Importing the useQuery hook from react-query for making asynchronous requests
import { useQuery } from "@tanstack/react-query";

// Function to fetch cryptocurrency data from the API
const fetchCryptoData = async () => {
  // Fetching data from the CoinGecko API for top 10 cryptocurrencies by market cap
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,binancecoin,solana,ripple,cardano,usd-coin,dogecoin,polkadot&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  // If the response is not successful, throw an error
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  // Return the response in JSON format
  return response.json();
};

// Main component that displays the list of cryptocurrencies
const CryptoList = () => {
  // Using the useQuery hook to fetch the data of cryptocurrencies and manage loading state
  const { data: cryptos, isLoading } = useQuery({
    queryKey: ["cryptos"], // Query key to identify the query
    queryFn: fetchCryptoData, // Function to fetch the data
    refetchInterval: 30000 // Refetch the data every 30 seconds
  });

  // If the data is still loading, display a loading message
  if (isLoading) {
    return (
      <div className="glass-card rounded-lg p-6 animate-pulse">Loading...</div>
    );
  }

  // If data is loaded, render the cryptocurrency information
  return (
    <div className="glass-card rounded-lg p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Top Cryptocurrencies</h2>

      {/* Wrapper for the table with horizontal scrolling */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-muted-foreground">
              {/* Table headers for each column */}
              <th className="pb-4">Name</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">24h Change</th>
              <th className="pb-4">Market Cap</th>
              <th className="pb-4">Volume (24h)</th>
              <th className="pb-4">Circulating Supply</th>
            </tr>
          </thead>

          <tbody>
            {/* Iterating through each cryptocurrency in the data array */}
            {cryptos?.map((crypto) => (
              <tr key={crypto.symbol} className="border-t border-secondary">
                {/* Column for displaying cryptocurrency name and symbol */}
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    {/* Displaying the image of the cryptocurrency */}
                    <img
                      src={crypto.image}
                      alt={crypto.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      {/* Displaying the cryptocurrency name */}
                      <p className="font-medium">{crypto.name}</p>
                      {/* Displaying the cryptocurrency symbol */}
                      <p className="text-sm text-muted-foreground">
                        {crypto.symbol.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Column for displaying current price of the cryptocurrency */}
                <td className="py-4">
                  ${crypto.current_price.toLocaleString()}
                </td>

                {/* Column for displaying 24-hour price change with an icon */}
                <td className="py-4">
                  <span
                    className={`flex items-center gap-1 ${
                      crypto.price_change_percentage_24h >= 0
                        ? "text-success" // Green text if price increased
                        : "text-warning" // Yellow text if price decreased
                    }`}
                  >
                    {/* Displaying up or down arrow based on price change */}
                    {crypto.price_change_percentage_24h >= 0 ? (
                      <ArrowUpIcon className="w-3 h-3" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3" />
                    )}
                    {/* Displaying the percentage change, formatted to two decimal places */}
                    {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                  </span>
                </td>

                {/* Column for displaying market capitalization */}
                <td className="py-4">
                  ${(crypto.market_cap / 1e9).toFixed(2)}B
                </td>

                {/* Column for displaying the total volume traded in the last 24 hours */}
                <td className="py-4">
                  ${(crypto.total_volume / 1e9).toFixed(2)}B
                </td>

                {/* Column for displaying circulating supply */}
                <td className="py-4">
                  {crypto.circulating_supply.toLocaleString()}{" "}
                  {crypto.symbol.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Exporting the CryptoList component as the default export
export default CryptoList;
