const express = require("express");

const app = express();

//Middleware for /admin/*
app.use("/admin", function (req, res, next) {
  console.log("Admin Auth is checked");
  const token = "xyz";
  const isAdminAuthorized = token === "xyzdshjfs";
  if (isAdminAuthorized) {
    console.log("Admin is authorized");
    next();
  } else res.status(401).send("Not authorized");
});

app.get("/admin/getAllData", function (req, res) {
  res.send("All data is sent");
});

app.get("/admin/deleteUser", function (req, res) {
  res.send("Deleted a user");
});

app.use("/", function (req, res) {
  res.send("Hello Hello Hello.");
});

app.listen(4444, () => {
  console.log("Server listening on port 4444 ...");
});
