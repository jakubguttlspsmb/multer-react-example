const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;

mongoose
.connect('')
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

const uploadsRouter = require("./routes/uploads");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", uploadsRouter);

app.listen(PORT, () => console.log(`App is running on ${PORT}`));