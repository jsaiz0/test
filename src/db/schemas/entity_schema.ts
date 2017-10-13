import { Schema } from "mongoose";

export const entitySchema: Schema = new Schema({
    title: String,
    body: String,
    createdAt: { type: Date, default: Date.now },
});