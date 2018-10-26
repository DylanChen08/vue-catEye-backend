import ReleaseLists from '../../model/common/releaseList'


class ReleaseList {
    constructor() {
        this.releaseMovieRender = this.releaseMovieRender.bind(this)
    }
    async releaseMovieRender(req, res, next) {
        let release = ReleaseLists
        let results = await release.find({}, {})
        console.log('请求 电影-正在上映的数据')
        console.log(results)
        res.send(results)
    }
}


export default new ReleaseList();