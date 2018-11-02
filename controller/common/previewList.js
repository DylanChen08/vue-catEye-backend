import PreviewLists from '../../model/common/previewList'


class ReleaseList {
    constructor() {
        this.previewMovieRender = this.previewMovieRender.bind(this)
        // this.getSpecificMovie = this.getSpecificMovie.bind(this)
    }

    /*
    * 获取正在上映的电影
    * @return: releaseList
    *
    * */
    async previewMovieRender(req, res, next) {
        let release = PreviewLists
        let results = await release.find({}, {})
        console.log('请求 电影-正在上映的数据')
        console.log(results)
        res.send({
            status: 1,
            msg: 'ok',
            data: results
        })
    }

    /*
    * 获取单个电影的数据
    * @params:movieId
    *
    * */
    // async getSpecificMovie(req, res, next) {
    //     if (req.params.movieId) {
    //         const movieId = parseInt(req.params.movieId)
    //         let release = ReleaseLists
    //         let results = await release.find({
    //             "id": movieId
    //         });
    //         console.log('mid', movieId)
    //         console.log(results)
    //         res.send({
    //             status: 1,
    //             msg: 'ok',
    //             data: results
    //         })
    //     } else {
    //         res.send({
    //             status: 0,
    //             msg: '未找到相关数据'
    //         })
    //     }
    // }

}


export default new ReleaseList();