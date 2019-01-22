import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const booksSchema = new Schema({}, {collection: 'books'})

booksSchema.index({id: 1});

const books = mongoose.model('books', booksSchema)

export default books
