// import indexList from './indexList'
// import releaseList from './releaseList'

import  renderRouter from './renderRouter'

export default app => {
    app.use('/common', renderRouter);
    // app.use('/movies/released',releaseList)
}