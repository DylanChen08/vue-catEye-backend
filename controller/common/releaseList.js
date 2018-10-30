import ReleaseLists from '../../model/common/releaseList'

/*
*
* 控制器：正在上映
* 功能：渲染数据,处理跳转事件
*
*
* */

class ReleaseList {
    constructor() {
        this.releaseMovieRender = this.releaseMovieRender.bind(this)
        this.getSpecificMovie = this.getSpecificMovie.bind(this)
    }

    //获取正在上映的电影
    async releaseMovieRender(req, res, next) {
        let release = ReleaseLists
        let results = await release.find({}, {})
        console.log('请求 电影-正在上映的数据')
        console.log(results)
        res.send({
            status: 1,
            msg: 'ok',
            data: results
        })
    }

    //获取单个电影的数据
    async getSpecificMovie(req, res, next) {

        if (true) {
            const movieId = parseInt(req.params.movieId)
            let release = ReleaseLists
            let results = await release.find({
                "id": movieId
            });
            console.log('mid', movieId)
            console.log(results)
            res.send({
                status: 1,
                msg: 'ok',
                data: results
            })
        }

    }

}


export default new ReleaseList();