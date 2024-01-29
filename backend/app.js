const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorMiddleWare = require("./middleware/error");
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataRoute = require("./routers/dataRoute");

app.use(cors());

app.use("/api/v1", dataRoute);

//=============================for live api check===============================

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// ================================================================

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1);

app.use(errorMiddleWare);

module.exports = app;
