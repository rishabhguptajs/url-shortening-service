import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv'
import urlRoutes from './routes/urlRoutes';
import rateLimit from 'express-rate-limit';

const app = express();

dotenv.config();

connectDB();

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50 // limit each IP to 50 requests per windowMs
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send('URL Shortening service is running!');
});

app.use('/api/url', urlRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})