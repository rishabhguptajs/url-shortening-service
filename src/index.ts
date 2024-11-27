import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv'
import urlRoutes from './routes/urlRoutes';

const app = express();

dotenv.config();

connectDB();

app.get('/', (req, res) => {
  res.send('URL Shortening service is running!');
});

app.use('/api/url', urlRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})