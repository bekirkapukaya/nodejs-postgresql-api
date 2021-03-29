import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import dbConnect from './helpers/dbConnect';

// Configs
dotenv.config({ path: './configs/config.env' });

// Database
dbConnect();

// Main App
const app = express();

// Routes
app.use(router);

app.listen(5000, () => {
  console.log(`Server is active...`);
});
