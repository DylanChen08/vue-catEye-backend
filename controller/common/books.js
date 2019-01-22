import books from '../../model/common/books'


class Books {
    constructor() {
        this.getAllBooks = this.getAllBooks.bind(this)
        this.getSpecificBook = this.getSpecificBook.bind(this)
    }

    async getAllBooks(req, res, next) {
        let _books = books
        let results = await _books.find({}, {})
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

    /*
    * 获取单个已经上映的电视剧的数据
    * @params:bookId
    *
    * */
    async getSpecificBook(req, res, next) {
        if (req.params.bookId) {
            const bookId = parseInt(req.params.bookId)
            let _books = books
            let results = await _books.find({
                "id": bookId
            });
            console.log('tvid', bookId)
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

export default new Books()