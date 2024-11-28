import Url from "../models/Url";

export const shortenURL = async(req: any, res: any) => {
    try {
        const { longURL } = req.body;

        // here we'll check if the URL already exists in the database
        let url = await Url.findOne({ longURL });

        if (url) {
            return res.status(301).json({
                shortURL: url.shortUrl,
                message: "URL already exists in the database!"
            });
        }

        // generate a short URL
        let shortUrl = Math.random().toString(36).substring(7);

        // check if the short URL already exists in the database
        url = await Url.findOne({ shortUrl });

        while(url) {
            shortUrl = Math.random().toString(36).substring(7);
            url = await Url.findOne({ shortUrl});
        }

        const full_shortUrl = `${process.env.BASE_SERVER_URL}/${shortUrl}`;

        // create a new URL object
        url = new Url({
            originalUrl: longURL,
            shortUrl: shortUrl,
        });

        // save the URL object to the database
        await url.save();

        res.status(201).json({
            longURL: url.originalUrl,
            shortURL: full_shortUrl,
            message: "URL shortened successfully!"
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: "Error in shortening the URL!" });
    }
}

export const redirectURL = async(req: any, res: any) => {
    try {
        const { shortUrl } = req.params;

        // find the URL object in the database
        const url = await Url.findOne({ shortUrl });

        if (!url) {
            return res.status(404).json({ message: "URL not found!" });
        }

        // increment access count and save
        url.accessCount += 1;
        await url.save();

        // force redirect to the original URL with 301 status
        return res.status(301).redirect(url.originalUrl);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: "Error in redirecting the URL!" });
    }
}