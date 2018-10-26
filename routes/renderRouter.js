import express from "express";
import Index from "../controller/common/indexList";
import Release from "../controller/common/releaseList";


const router = express.Router();


router.get("/index", Index.indexMovieRender);    //首页
router.get("/released", Release.releaseMovieRender);  //正在上映的电影



export default router;
