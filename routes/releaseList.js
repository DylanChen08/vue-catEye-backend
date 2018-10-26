console.log(41191)

import express from "express";
import Release from "../controller/render/indexList";
const router = express.Router();
router.get("/", Release.indexMovieRender);

export default router;
