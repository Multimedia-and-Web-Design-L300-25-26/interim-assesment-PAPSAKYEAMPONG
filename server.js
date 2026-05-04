const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cryptoRoutes = require('./routes/cryptoRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://127.0.0.1:5173',
    process.env.FRONTEND_URL // Add this so Render knows to accept requests from your Netlify app
  ].filter(Boolean),
  credentials: true, // Allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/crypto', cryptoRoutes);

// Also map direct routes as mentioned in the README (in case they are expected at the root)
app.use('/register', authRoutes);
app.use('/login', authRoutes);
app.use('/profile', authRoutes);
app.use('/crypto', cryptoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
