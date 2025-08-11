import express from "express";
import { shortenUrl, redirectUrl, getAllUrls } from "../controllers/url.controller.js";

const router = express.Router();

router.post("/shorten", shortenUrl)
router.get("/:shorten_code", redirectUrl);
router.get("/admin/all", getAllUrls)


export default router;