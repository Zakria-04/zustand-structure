import express from "express";
import mongoose from "mongoose";
import Routes from "./API/Router/routes";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())
app.use("/", Routes);

const url =
  "mongodb+srv://code-structure_server:code-structure_server123@cluster0.0waqbd5.mongodb.net/";

mongoose.connect(url);
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB error", err);
});

app.get("/server", (req, res) => {
  res.status(200).json({ server: "server is online" });
});

export default app;
