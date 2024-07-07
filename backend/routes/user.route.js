const express = require("express");
const { userModel } = require("../models/user.model");
const router = express.Router();

router.get("/", async (req, resp) => {
  try {
    const users = await userModel.find({});
    resp.send(users);
  } catch (err) {
    console.log("user get route error : ", err);
  }
});

router.post("/signup", async (req, resp) => {
  try {
    const body = req.body;
    console.log("body : ", body);
    const user = await userModel.create(body);
    resp.status(201).json({
      userCreated: user,
      success: true,
      msg: "Registered successfully",
    });
  } catch (err) {
    console.log("user signup post route error : ", err);
    resp.status(404).json({ success: false, msg: "Error while registering" });
  }
});

router.post("/login", async (req, resp) => {
  try {
    const body = req.body;
    console.log("body : ", body);
    const user = await userModel.find({ email: req.body.email });
    if (!user) {
      return resp
        .status("404")
        .json({ success: false, msg: "User not exists" });
    }
    resp.status(201).json({
      success: true,
      msg: "Login successfully",
    });
  } catch (err) {
    console.log("user login post route error : ", err);
    resp.status(404).json({ success: false, msg: "Error while logging" });
  }
});

module.exports = router;
