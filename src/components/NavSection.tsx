import React, { useState, useEffect } from "react";

interface CryptoInfo {
  symbol: string;
  price_usd: string;
}

const NavSection = () => {
  const [cryptoData, setCryptoData] = useState<CryptoInfo[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Função para buscar informações de criptomoedas da API
    const fetchCryptoData = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/assets");
        const data = await response.json();
        setCryptoData(data.data.slice(0, 5));
      } catch (error) {
        console.error("Erro ao buscar dados das criptomoedas:", error);
      }
    };

    fetchCryptoData();
  }, []);

  // Lógica de pesquisa para filtrar as criptomoedas
  const filteredCryptoData = cryptoData.filter((crypto) =>
    crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Barra de pesquisa */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquise criptomoedas"
          style={styles.searchInput}
        />

        {/* Informações de criptomoedas rolando */}
        <div style={styles.cryptoInfo}>
          <div style={styles.marquee}>
            {filteredCryptoData.length > 0 ? (
              filteredCryptoData.map((crypto, index) => (
                <span key={index} style={styles.cryptoItem}>
                  {crypto.symbol}: ${crypto.price_usd} &nbsp;&nbsp;
                </span>
              ))
            ) : (
              <span style={styles.cryptoItem}>
                Nenhuma criptomoeda encontrada.
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
const styles = {
  navbar: {
    backgroundColor: "#121212",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed" as "fixed", // Corrigido aqui
    top: 0,
    width: "100%",
    zIndex: 1000
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    alignItems: "center"
  },
  searchInput: {
    padding: "8px",
    width: "300px",
    border: "1px solid #444",
    borderRadius: "4px",
    color: "#fff",
    backgroundColor: "#1d1d1d",
    marginRight: "20px"
  },
  cryptoInfo: {
    color: "#fff",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "calc(100% - 400px)" // Ajuste o limite de largura
  },
  marquee: {
    display: "inline-block",
    whiteSpace: "nowrap",
    animation: "marquee 20s linear infinite"
  },
  cryptoItem: {
    marginRight: "20px",
    fontSize: "14px",
    display: "inline-block"
  }
};

export default NavSection;
