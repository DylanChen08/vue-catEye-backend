import renderRouter from './renderRouter'

export default app => {
    app.use('/common', renderRouter);
}