const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Crypto = require('./models/Crypto');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const cryptos = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 65000,
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    change24h: 2.5,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3500,
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    change24h: 1.8,
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: 150,
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    change24h: 12.5,
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.45,
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
    change24h: -1.2,
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.15,
    image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
    change24h: 5.4,
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    price: 7.2,
    image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png',
    change24h: 0.5,
  },
  {
    name: 'Chainlink',
    symbol: 'LINK',
    price: 14.5,
    image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png',
    change24h: -2.3,
  },
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    price: 35.6,
    image: 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png',
    change24h: 8.9,
  },
  {
    name: 'Pepe',
    symbol: 'PEPE',
    price: 0.000008,
    image: 'https://assets.coingecko.com/coins/images/29850/large/pepe-token.jpeg',
    change24h: 25.4, // gainer
  },
  {
    name: 'Shiba Inu',
    symbol: 'SHIB',
    price: 0.000025,
    image: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png',
    change24h: 4.2,
  }
];

const importData = async () => {
  try {
    await Crypto.deleteMany();
    await Crypto.insertMany(cryptos);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
