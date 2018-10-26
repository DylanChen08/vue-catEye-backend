import indexList from './indexList'
import releaseList from './releaseList'

export default app => {
    app.use('/index/movies', indexList);
    app.use('/movies/released',releaseList)
}