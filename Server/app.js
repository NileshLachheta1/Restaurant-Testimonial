import express from "express";
import cors from "cors";
import Router from "./routes/index.route.js";
import connection from "./config/db.config.js";

const app = express();

connection();
app.use(express.json());
app.use(cors());
app.use("/", Router);

app.listen(3001, () => {
  console.log("Server Connection Successful");
});
