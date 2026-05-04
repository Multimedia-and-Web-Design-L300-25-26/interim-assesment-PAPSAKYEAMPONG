const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a crypto name'],
    unique: true,
  },
  symbol: {
    type: String,
    required: [true, 'Please add a symbol'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
  },
  image: {
    type: String,
    required: [true, 'Please add an image URL'],
  },
  change24h: {
    type: Number,
    required: [true, 'Please add a 24h change percentage'],
  },
}, {
  timestamps: true, // Automatically manages createdAt and updatedAt
});

module.exports = mongoose.model('Crypto', cryptoSchema);
