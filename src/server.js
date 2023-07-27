import express from "express";
import bodyParser from "body-parser";
import path from "path";

import viewEngine from "./configs/viewEngine";

const app = express();
const port = 7575;

//config babel
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//config view engine
viewEngine(app);

app.get("/", (req, res) => {
  res.render("./index.ejs");
});

app.get("/about", (req, res) => {
  res.send("Hello About Page");
});

app.listen(port, () => {
  console.log(`Server Runing in port: ${port} `);
});
