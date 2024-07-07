const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/pod";

mongoose.connect(URI).then(() => {
  console.log("DB connected!");
});
