const BookModel = require("../models/Book.js");

//=====GET BOOK CONTROLLER========

const getBooks = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//=====CREATE NEW BOOK CONTROLLER========

const createBook = async (req, res) => {
    try {
      const { title, author, publishedDate, pages } = req.body;
      console.log(req.body);
      const book = await BookModel.create({ title, author, publishedDate, pages });
      res.status(201).json({ success: true, data: book });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  

//=====UPDATE BOOK CONTROLLER========

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishedDate, pages } = req.body;

    const book = await BookModel.findByIdAndUpdate(
      id,
      { title, author, publishedDate, pages },
      { new: true, runValidators: true }
    );

    if (!book) {
      return res.status(404).json({ success: false, message: "Book not found" });
    }

    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//=====EXPORTING ALL CONTROLLERS========

module.exports = {
  getBooks,
  createBook,
  updateBook,
};
