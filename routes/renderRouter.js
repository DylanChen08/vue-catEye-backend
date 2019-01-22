import express from "express";
import Index from "../controller/common/indexList";
import Release from "../controller/common/releaseList";
import Preview from "../controller/common/previewList";
import Comments from "../controller/common/comments"
import TV from "../controller/common/tvSeries"
import Books from  "../controller/common/books"

/*
*
* 数据渲染的主要路由
* 功能：渲染各个页面的数据
*
* */
const router = express.Router();


router.get("/index", Index.indexMovieRender);    //首页
router.get("/carousel", Index.indexCarouselRender);    //首页轮播图
router.get("/released", Release.getALLReleased);  //获取全部正在上映的电影
router.get("/released/:page", Release.releasedMovieRender);  //分页获取正在上映的电影
router.get("/preview", Preview.getALLPreview);  //获取全部未上映的电影
router.get("/preview/:page", Preview.previewMovieRender);  //分页获取未上映的电影
router.get("/movies/:movieId", Release.getSpecificMovie);  //获取单个已经上映的电影数据
router.get("/movies/:movieId", Preview.getSpecificMovie);  //获取单个未上映的电影数据
router.get("/comments/:movieId", Comments.getComments);  //获取单个评论电影数据
router.get("/tv", TV.getALLTvSeries);  //获取全部电视剧
router.get("/tv/:tvId", TV.getSpecificTvSeries);  //获取单个电视剧的数据
router.get("/books", Books.getAllBooks);  //获取全部书籍
router.get("/books/:bookId", Books.getSpecificBook);  //获取单本书籍的数据

export default router;
