const express = require("express");

require("dotenv").config();

const app = express();

app.set("view engine", "hbs")

app.set("views", __dirname + "/views")

app.use(express.static("public"));


app.get("/home", (req, res, next) =>
res.render("home")
);

app.get("/about", (req, res, next) =>
res.render("about")
);

app.get("/", (req, res, next) => res.render("index", {name:"Marcel", hobbies:["Music", "Coding", "Climbing"]}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("🏃‍ on port 3000"));
