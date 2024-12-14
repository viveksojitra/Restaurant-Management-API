const express = require("express");
const app = express();
const routes = require("./routes/index");
const db = require("./configs/db");
const bodyParser = require("body-parser");

const PORT = 3003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(PORT, (err) => {

    if (err) {
        console.log("Error running server!");
    } else {
        console.log(`Server is running on http://localhost:${PORT}`);
    }
})