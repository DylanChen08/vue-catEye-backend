import express from "express";
import Index from "../controller/common/indexList";
import Release from "../controller/common/releaseList";

/*
*
* 数据渲染的主要路由
* 功能：渲染各个页面的数据
*
* */
const router = express.Router();


router.get("/index", Index.indexMovieRender);    //首页
router.get("/released", Release.releaseMovieRender);  //正在上映的电影
router.get("/movies/:movieId", Release.getSpecificMovie);  //获取单个电影数据



export default router;
