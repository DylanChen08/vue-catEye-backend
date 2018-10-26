console.log(41191)

import express from "express";
import Release from "../controller/render/releaseList";
const router = express.Router();
router.get("/", Release.releaseMovieRender);

export default router;
