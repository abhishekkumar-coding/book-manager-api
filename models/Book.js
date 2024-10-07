
const mongoose = require("mongoose");

//=====CREATING SCHEMA========

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  author: {
    type: String,
    required: [true, "Please add an author"],
  },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  pages: {
    type: Number,
    required: [true, "Please add number of pages"],
  },
});

//=====CREATING MODEL========

const BookModel = mongoose.model("Book", bookSchema);
module.exports = BookModel;
