import PreviewLists from '../../model/common/previewList'


class PreviewList {
    constructor() {
        this.getALLPreview = this.getALLPreview.bind(this)
        this.previewMovieRender = this.previewMovieRender.bind(this)
        this.getSpecificMovie = this.getSpecificMovie.bind(this)
    }

    //获取正在上映的全部电影

    async getALLPreview(req, res, next) {
        let preview = PreviewLists
        let results = await preview.find({}, {})
        console.log('请求 电影-未上映的数据')
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

    /*
    * 分页获取正在上映的电影
    * @page:页码
    *
    * */
    async previewMovieRender(req, res, next) {
        let preview = PreviewLists
        let eachNum = 12
        if (req.params.page) {
            const page = parseInt(req.params.page)
            let results = await preview.find({}, {}).skip((parseInt(page) - 1) * eachNum).limit(eachNum)
            console.log('请求 电影-未上映的数据')
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
    * 获取单个未上映的电影的数据
    * @params:movieId
    *
    * */
    async getSpecificMovie(req, res, next) {
        if (req.params.movieId) {
            const movieId = parseInt(req.params.movieId)
            let preview = PreviewLists
            let results = await preview.find({
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


export default new PreviewList();