import ReleaseLists from '../../model/common/releaseList'


class ReleaseList {
    constructor() {
        this.releasedMovieRender = this.releasedMovieRender.bind(this)
        this.getSpecificMovie = this.getSpecificMovie.bind(this)
    }

    async getALLReleased(req, res, next) {
        let release = ReleaseLists
        let results = await release.find({}, {})
        console.log('请求 电影-正在上映的数据')
        console.log(results.length)
        //判断所查询的数据是否为空
        if (results.length !== 0) {
            res.send({
                status: 1,
                msg: 'ok',
                data: results
            })
        } else {

        }      res.send({
                status: 1,
                msg: 'empty'
            })
        }


    /*
    * 获取正在上映的电影
    * @return: releaseList
    *
    * */
    async releasedMovieRender(req, res, next) {
        let release = ReleaseLists
        let eachNum = 12
        if (req.params.page) {
            const page = req.params.page
            let results = await release.find({}, {}).skip((parseInt(page) - 1) * eachNum).limit(eachNum)
            console.log('请求 电影-正在上映的数据')
            console.log(results.length)
            //判断所查询的数据是否为空
            if (results.length !== 0) {
                res.send({
                    status: 1,
                    msg: 'ok',
                    data: results
                })
            } else {
                res.send({
                    status: 1,
                    msg: 'empty'
                })
            }
        }
    }

    /*
    * 获取单个已经上映的电影的数据
    * @params:movieId
    *
    * */
    async getSpecificMovie(req, res, next) {
        if (req.params.movieId) {
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
        } else {
            res.send({
                status: 0,
                msg: '未找到相关数据'
            })
        }
    }

}


export default new ReleaseList();