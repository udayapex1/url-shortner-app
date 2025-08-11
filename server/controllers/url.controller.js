import { Url } from "../models/url.model.js";
import { nanoid } from "nanoid";
import validator from "validator";

export const shortenUrl = async (req, res) => {
    const { original_url } = req.body;

    // Validating URL
    if (!original_url || !validator.isURL(original_url, { require_protocol: true })) {
        return res.status(400).json({ error: "Invalid URL format" });
    }

    try {
        let existingUrl = await Url.findOne({ original_url })
        if (existingUrl) {
            return res.json({ short_url: `${process.env.BASE_URL}/${existingUrl.shorten_code}` });
        }

        const shorten_code = nanoid(6);
        //Save to DB
        const newUrl = await Url.create({ original_url, shorten_code })

        res.json({ short_url: `${newUrl.shorten_code}` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

export const redirectUrl = async (req, res) => {
    try {
        const { shorten_code } = req.params;

        const urlDoc = await Url.findOne({ shorten_code });
        if (!urlDoc) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        urlDoc.click_count = (urlDoc.click_count || 0) + 1;
        await urlDoc.save();



        return res.redirect(urlDoc.original_url);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

export const getAllUrls = async (req, res) => {
    try {
        const urls = await Url.find({}, { _id: 0, __v: 0 }).sort({ createdAt: -1 });
        res.json(urls);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}