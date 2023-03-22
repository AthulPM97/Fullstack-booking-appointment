const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./server/util/database");

const userRoutes = require("./server/routes/user");

const app = express();

//middlewares
app.use(cors());

app.use(bodyParser.json());

app.use("/", userRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => console.log("running on port 3000"));
  })
  .catch((err) => console.log(err));
