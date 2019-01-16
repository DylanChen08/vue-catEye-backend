import tvSeries from '../../model/common/tvSeries'


class TvSeries {
    constructor() {
        this.getALLTvSeries = this.getALLTvSeries.bind(this)
    }

    async getALLTvSeries(req, res, next) {
        let tv = tvSeries
        let results = await tv.find({}, {})
        console.log('请求 全部电视剧的数据')
        console.log(results)
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

export default new TvSeries()