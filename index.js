const express = require("express");

const route = require("./routes/client/index.route");

const routeAdmin = require("./routes/admin/index.route");

const systemPrefix = require("./config/system");

const mongoose = require("mongoose");

require("dotenv").config();

const database = require("./config/database");

database.connect();

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

// App Locals Variables
app.locals.prefixAdmin = systemPrefix.prefixAdmin;

app.use(express.static('public'));

// Routes
route(app);
routeAdmin(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});