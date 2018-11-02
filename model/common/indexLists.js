import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const carouselSchema = new Schema({}, {collection: 'carousel'})

carouselSchema.index({id: 1});

const IndexLists = mongoose.model('IndexLists', carouselSchema)

export default IndexLists

