import express from 'express';

console.log("yellow word!");
// looking for a http server connection

// const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res: express.Response) => {
  res.send("yellow word!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


