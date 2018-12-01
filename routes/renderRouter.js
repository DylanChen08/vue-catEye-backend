import express from "express";
import Index from "../controller/common/indexList";
import Release from "../controller/common/releaseList";
import Preview from "../controller/common/previewList";
import Comments from "../controller/common/comments"

/*
*
* 数据渲染的主要路由
* 功能：渲染各个页面的数据
*
* */
const router = express.Router();


router.get("/index", Index.indexMovieRender);    //首页
router.get("/carousel", Index.indexCarouselRender);    //首页轮播图
router.get("/released/:page", Release.releasedMovieRender);  //正在上映的电影
router.get("/preview/:page", Preview.previewMovieRender);  //未上映的电影
router.get("/movies/:movieId", Release.getSpecificMovie);  //获取单个已经上映的电影数据
router.get("/movies/:movieId", Preview.getSpecificMovie);  //获取单个未上映的电影数据
router.get("/comments/:movieId", Comments.getComments);  //获取单个电影数据


export default router;
