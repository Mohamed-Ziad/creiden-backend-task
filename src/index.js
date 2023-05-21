
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

require("./app/db/db.connection");

dotenv.config({ path: __dirname + '/.env' });

app.use(cors());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON request bodies
app.use(express.json());



const authRoutes = require("./app/routes/auth.routes");
const userRoutes = require("./app/routes/user.routes");


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);



app.listen(3300, () => {
    console.log("IS RUNNING");
})