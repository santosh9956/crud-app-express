require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);

// Error handling middleware
const { errorHandler } = require("./middleware/errorMiddleware");
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening on this port - ${PORT}`);
});
