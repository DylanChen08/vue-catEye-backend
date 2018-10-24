import indexList from './indexList'

export default app => {
    app.use('/index', indexList);
 
}