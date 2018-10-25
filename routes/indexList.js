console.log(41191)

import express from "express";
import Index from "../controller/render/indexList";
const router = express.Router();
router.get("/", Index.indexMovieRender);

export default router;
