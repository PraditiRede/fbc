require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const handle = require("./handlers");
const routes = require("./routes");
const booksRoutes = require("./routes/books.js");

app.listen(4000, function () {
  console.log("Server started at port 4000");
});

app.use('/', routes.auth);
app.use('/', booksRoutes);

app.use(handle.notFound);
app.use(handle.errors);
