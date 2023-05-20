const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require("body-parser")

dotenv.config({ path: __dirname + '/.env' });

app.use("/images/users", express.static(path.join(__dirname, '/app/wwwroot/images/users')));


app.use(cors());
app.use(express.json());


const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
  console.log(`Server Listing On ${HOST}:${PORT}`);
})