import varietyShows from '../../model/common/varietyShows'


class VarietyShows {
    constructor() {
        this.getAllVarietyShows = this.getAllVarietyShows.bind(this)
        this.getSpecificShow = this.getSpecificShow.bind(this)
    }

    async getAllVarietyShows(req, res, next) {
        let _shows = varietyShows
        let results = await _shows.find({}, {})
        console.log('请求 全部综艺的数据')
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

    /*
    * 获取单个综艺的数据
    * @params:showId
    *
    * */
    async getSpecificShow(req, res, next) {
        if (req.params.showId) {
            const showId = parseInt(req.params.showId)
            let _shows = varietyShows
            let results = await _shows.find({
                "id": showId
            });
            console.log('showid', showId)
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

export default new VarietyShows()