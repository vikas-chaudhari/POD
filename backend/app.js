const express = require("express");
require("./db/connect");
const userRouter = require("./routes/user.route");

// constants
const app = express();
const PORT = 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);

// routes
app.get("/", (req, resp) => {
  resp.send("welcome");
});

app.listen(PORT, () => {
  console.log("server started...");
});
