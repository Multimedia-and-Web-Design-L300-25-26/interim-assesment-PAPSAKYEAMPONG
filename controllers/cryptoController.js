const Crypto = require('../models/Crypto');

// @desc    Get all tradable cryptocurrencies
// @route   GET /crypto
// @access  Public
exports.getAllCrypto = async (req, res) => {
  try {
    // Return all cryptos, maybe sorted by a default, let's say market cap or just name. We don't have market cap, so just all.
    const cryptos = await Crypto.find({});
    res.json(cryptos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get top gainers
// @route   GET /crypto/gainers
// @access  Public
exports.getTopGainers = async (req, res) => {
  try {
    // Sort by change24h in descending order
    const cryptos = await Crypto.find({}).sort({ change24h: -1 });
    res.json(cryptos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get new listings
// @route   GET /crypto/new
// @access  Public
exports.getNewListings = async (req, res) => {
  try {
    // Sort by createdAt in descending order (newest first)
    const cryptos = await Crypto.find({}).sort({ createdAt: -1 });
    res.json(cryptos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add a new cryptocurrency
// @route   POST /crypto
// @access  Public (in reality should be protected/admin only, but per assignment it's open)
exports.addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    const cryptoExists = await Crypto.findOne({ symbol });
    if (cryptoExists) {
      return res.status(400).json({ message: 'Crypto already exists' });
    }

    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image,
      change24h,
    });

    res.status(201).json(crypto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
