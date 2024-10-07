const express = require("express");

//=====IMPORTING ALL CONTROLLERS========

const {
  getBooks,
  createBook,
  updateBook,
} = require("../controllers/bookController");

const router = express.Router();

//=====GET AND POST ROUTE========

router.route("/").get(getBooks).post(createBook);

//=====UPDATE ROUTE========

router.route("/:id").put(updateBook);

module.exports = router;
