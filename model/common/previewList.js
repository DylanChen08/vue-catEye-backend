import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const previewListsSchema = new Schema({}, {collection: 'previewList'})

previewListsSchema.index({id: 1});

const PreviewLists = mongoose.model('PreviewLists', previewListsSchema)

export default PreviewLists

