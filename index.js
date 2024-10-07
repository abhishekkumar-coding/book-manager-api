const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();
console.log(process.env.MONGO_URI);

const app = express();
const port = process.env.port || 8000;

app.use(express.json());

app.use("/api/books", bookRoutes);

//=====DB CONNECTION========
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Database connection successful`);

//=====SERVER STARTING========

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(`Database connection failsed ${err}`));
