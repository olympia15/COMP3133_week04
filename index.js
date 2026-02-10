const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 8081;
const MONGO_URI = process.env.MONGO_URI || "";

mongoose.connect(MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

app.use(restaurantRouter);

app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:8081`) 
});