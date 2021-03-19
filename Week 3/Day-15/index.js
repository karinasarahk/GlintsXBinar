const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("This is Terminal 1!");
    console.log("This is Terminal 2!");
    res.send(`This is response for ${req.query.name}!`);
});

app.post("/", (req, res) => {
    console.log("Used to add data!");
    res.send(`This is POST, ${req.body.username} and ${req.body.password}!`);
})

app.put("/", (req, res) => {
    console.log("Used to update data!");
    res.send("This is PUT!");
});

app.delete("/", (req, res) => {
    console.log("Usually used to delete data!");
    res.send("This is DELETE!");
});

app.listen(3000, () => console.log("Server running on 3000!"));