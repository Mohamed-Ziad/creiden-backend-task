const mongoose = require("mongoose");
const LOCAL_DB = `mongodb://127.0.0.1:27017/users-management`;
mongoose.set("strictQuery", false);

mongoose.connect(LOCAL_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log("DB Connected");
    })
    .catch((error) => {
        console.log("DB Error Is ==>", error);
    })