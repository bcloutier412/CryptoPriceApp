import CryptoNode from './components/CryptoNode'

const cryptoCurrencies = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png'
  }
]
function App() {
  return (
    <div className="App">
      <h1 style={header}>Crypto Quotes</h1>
      {cryptoCurrencies.map(cryptoCurrency => {
        return <CryptoNode key={cryptoCurrency.name} name={cryptoCurrency.name} symbol={cryptoCurrency.symbol} image={cryptoCurrency.image}/>
      })}
    </div>
  );
}

// STYLING
const header = {
  margin: "auto",
  width: "max-content",
  marginBottom: '20px'
};
export default App;
