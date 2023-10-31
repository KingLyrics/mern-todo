const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const TodoRoute = require("./routes/TodoRoute");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongodb database");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/todo", TodoRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
