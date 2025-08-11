import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    original_url: {
        type: String,
        required: true
    },
    shorten_code: {
        type: String,
        required: true, unique: true
    },
    click_count: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

export const Url = mongoose.model("Url", urlSchema) 