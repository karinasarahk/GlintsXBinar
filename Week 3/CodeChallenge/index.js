const express = require("express");
const app = express();
const routerOne = require("./routes/routerOne");

app.use("/", routerOne);
app.listen(3000, () => console.log("Server running on the 3000 port."));
