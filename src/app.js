import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import viewEngine from "./configs/viewEngine";
import router from "./routes/router";

const app = express();
const port = process.env.PORT;

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//bodyParser style express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config view engine
viewEngine(app);

//router
app.use("/", router);

app.listen(port, () => {
  console.log(`Server Runing in port: ${port} `);
});
