import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const shortCommentsSchema = new Schema({}, {collection: 'shortComments'})

shortCommentsSchema.index({id: 1});

const ShortComments = mongoose.model('ShortComments', shortCommentsSchema)

export default ShortComments

