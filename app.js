require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const dbConnect = require("./config/mongo");

//procees, variable de entorno, puerto || sino puerto 3000
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log("App en linea en puerto: " + port);
});

app.get("/", function (req, res) {});

app.use("/api", require("./routes")); //cuando entre a /api ejecutgo la ruta index automaticamente

dbConnect();
