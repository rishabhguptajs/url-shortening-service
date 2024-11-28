import mongoose, { Schema, Document } from "mongoose";

export interface IUrl extends Document {
    originalUrl: string;
    shortUrl: string;
    accessCount: number;
    date: Date;
}

const urlSchema: Schema = new Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    accessCount: { type: Number, required: true, default: 0 },
    date: { type: Date, default: Date.now }
})

const Url = mongoose.model<IUrl>('Url', urlSchema);

export default Url;