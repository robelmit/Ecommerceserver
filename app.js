import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import "./config/MongoConnect.js";


dotenv.config();
const app = express();

// MIDDLEWARE
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(authJwt());
app.use(errorHandler);
const __dirname = path.join();
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
const api = process.env.API_URL;
const Port = process.env.PORT;

// ROUTERS


// development
// app.listen(Port, () => {
//   console.log(`Example app listening at http://localhost:${Port}`);
// });

// production
// development
var server = app.listen(Port, () => {
  let port = server.address().port;
  console.log(`express is working ${port}`);
});
