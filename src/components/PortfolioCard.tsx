import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { useQuery } from "@tanstack/react-query";

const fetchCoinPrices = async (coinId) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=180&interval=daily`
  );
  const data = await response.json();

  // Format data for the chart - take last 6 months
  return data.prices.slice(-180).map(([timestamp, price]) => ({
    date: new Date(timestamp).toLocaleDateString("en-US", { month: "short" }),
    price: Math.round(price)
  }));
};

const fixedNGTXData = Array(180).fill({
  date: "Jan",
  price: 0.5
});

const PortfolioCard = () => {
  const { data: bitcoinData, isLoading: bitcoinLoading } = useQuery({
    queryKey: ["bitcoinPrices"],
    queryFn: () => fetchCoinPrices("bitcoin"),
    refetchInterval: 60000 // Refetch every minute
  });

  const { data: ethereumData, isLoading: ethereumLoading } = useQuery({
    queryKey: ["ethereumPrices"],
    queryFn: () => fetchCoinPrices("ethereum"),
    refetchInterval: 60000
  });

  const { data: solanaData, isLoading: solanaLoading } = useQuery({
    queryKey: ["solanaPrices"],
    queryFn: () => fetchCoinPrices("solana"),
    refetchInterval: 60000
  });

  const { data: xrpData, isLoading: xrpLoading } = useQuery({
    queryKey: ["xrpPrices"],
    queryFn: () => fetchCoinPrices("ripple"),
    refetchInterval: 60000
  });

  if (bitcoinLoading || ethereumLoading || solanaLoading || xrpLoading) {
    return (
      <div className="glass-card p-6 rounded-lg mb-8 animate-fade-in">
        <h2 className="text-xl font-semibold mb-6">
          Cryptocurrency Performance
        </h2>
        <div className="w-full h-[200px] flex items-center justify-center">
          <span className="text-muted-foreground">Loading...</span>
        </div>
      </div>
    );
  }

  const renderChart = (data, color, label) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">{label}</h3>
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" stroke="#E6E4DD" fontSize={12} />
            <YAxis
              stroke="#E6E4DD"
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                background: "#3A3935",
                border: "1px solid #605F5B",
                borderRadius: "8px"
              }}
              labelStyle={{ color: "#E6E4DD" }}
              itemStyle={{ color: "#8989DE" }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="glass-card p-6 rounded-lg mb-8 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Cryptocurrency Performance</h2>

      {renderChart(bitcoinData, "#8989DE", "Bitcoin Performance")}
      {renderChart(ethereumData, "#4CAF50", "Ethereum Performance")}
      {renderChart(solanaData, "#F44336", "Solana Performance")}
      {renderChart(xrpData, "#2196F3", "XRP Performance")}
      {renderChart(fixedNGTXData, "#FF9800", "NheengatuX Performance")}

      <p className="text-sm text-muted-foreground mt-4">
        Hurry up and grab your NheengatuX crypto in our limited-time pre-sale.
      </p>
    </div>
  );
};

export default PortfolioCard;
