import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const tvSeriesSchema = new Schema({}, {collection: 'tvSeries'})

tvSeriesSchema.index({id: 1});

const tvSeries = mongoose.model('tvSeries', tvSeriesSchema)

export default tvSeries
