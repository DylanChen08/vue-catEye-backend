import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const varietyShowsSchema = new Schema({}, {collection: 'varietyShows'})

varietyShowsSchema.index({id: 1});

const varietyShows = mongoose.model('varietyShows', varietyShowsSchema)

export default varietyShows
