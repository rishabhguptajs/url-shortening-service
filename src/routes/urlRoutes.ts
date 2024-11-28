import express, { Request, Response } from 'express';
import { redirectURL, shortenURL } from '../controllers/urlController';

const router = express.Router();

router.post('/shorten', async (req: Request, res: Response) => {
    try {
        const response = await shortenURL(req, res);
        return response;
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:shortUrl', async (req: Request, res: Response) => {
    try {
        const response = await redirectURL(req, res);
        return response;
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;