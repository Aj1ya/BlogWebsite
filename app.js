// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent =  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum incidunt quaerat, doloribus dolorum voluptatibus perspiciatis dolore ex reprehenderit tempora omnis. Ad facilis perferendis, illo consequatur repudiandae dolorum animi minus quod?"
const aboutContent =  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum incidunt quaerat, doloribus dolorum voluptatibus perspiciatis dolore ex reprehenderit tempora omnis. Ad facilis perferendis, illo consequatur repudiandae dolorum animi minus quod?"
const contactContent =  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum incidunt quaerat, doloribus dolorum voluptatibus perspiciatis dolore ex reprehenderit tempora omnis. Ad facilis perferendis, illo consequatur repudiandae dolorum animi minus quod?"

const app = express();

app.set('view engine', 'ejs');
app.set('partials engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("home", {homeContent: homeStartingContent});
})

app.post("/", (req, res)=>{
    console.log("home");
})

app.listen(3000, (req, res)=>{
    console.log("app started in 3000");
})