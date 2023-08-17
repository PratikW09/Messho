const express = require("express");

const connectDb = require("./config/database");
const cors = require("cors");
const router = require("./routes/productsRoute");
const userRouter = require("./routes/userRoute");
require("dotenv").config();

const app = express();
app.use(cors());
//connecting to database function
connectDb();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(userRouter);

app.use(router);

app.get("/", (req, res) => {
  res.send("server is from node server");
});

const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
