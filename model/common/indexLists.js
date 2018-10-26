import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const indexListsSchema = new Schema({}, {collection: 'indexList'})

indexListsSchema.index({id: 1});

const IndexLists = mongoose.model('IndexLists', indexListsSchema)

export default IndexLists

