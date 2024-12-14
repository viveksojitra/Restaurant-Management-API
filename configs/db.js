const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017/restaurant";

mongoose.connect(connectionURL).then(() => {
    console.log("Database connected.");
}).catch((err) => {
    console.log("ERROR! Connecting to database.", err);
});

module.exports = mongoose.connection;