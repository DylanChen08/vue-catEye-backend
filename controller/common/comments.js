import ShortComments from '../../model/common/comments'


class ShortComment {
    constructor() {
        this.getComments = this.getComments.bind(this)
        console.log(this.indexMovieRender)
    }

    async getComments(req, res, next) {
        if (req.params.movieId) {
            const movieId = parseInt(req.params.movieId)
            let comments = ShortComments
            let results = await comments.find({
                "movieId": movieId
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

export default new ShortComment();