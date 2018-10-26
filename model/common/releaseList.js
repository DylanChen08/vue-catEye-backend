import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const releaseListsSchema = new Schema({}, {collection: 'moviesReleasedList'})

releaseListsSchema.index({id: 1});

const ReleaseLists = mongoose.model('ReleaseLists', releaseListsSchema)

export default ReleaseLists

