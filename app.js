// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const loadash = require("lodash");

const homeStartingContent =  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum incidunt quaerat, doloribus dolorum voluptatibus perspiciatis dolore ex reprehenderit tempora omnis. Ad facilis perferendis, illo consequatur repudiandae dolorum animi minus quod?"
const aboutContent =  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum incidunt quaerat, doloribus dolorum voluptatibus perspiciatis dolore ex reprehenderit tempora omnis. Ad facilis perferendis, illo consequatur repudiandae dolorum animi minus quod?"
const contactContent =  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum incidunt quaerat, doloribus dolorum voluptatibus perspiciatis dolore ex reprehenderit tempora omnis. Ad facilis perferendis, illo consequatur repudiandae dolorum animi minus quod?"

const app = express();

let posts = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("home", {
        homeContent: homeStartingContent,
        posts: posts
    });
})

app.get("/about", (req, res)=>{
    res.render("about", {aboutContent: aboutContent});
})

app.get("/contact", (req, res)=>{
    res.render("contact", {contactContent: contactContent});
})

app.get("/compose", (req, res)=>{
    res.render("compose");
})

app.post("/compose", (req, res)=>{ 
    const post = {
        title: req.body.postTitle,
        content: req.body.postContent
    };
    posts.push(post);
    res.redirect("/");
})

app.get("/posts/:postName", (req,res)=>{
    const reqTitle = loadash.lowerCase(req.params.postName);
    posts.forEach((post)=>{        
        const strTitle = loadash.lowerCase(post.title);
        if( reqTitle === strTitle ){
            res.render("post", {
                title: post.title,
                content: post.content
            });
        }  
    });
});

app.listen(3000, (req, res)=>{
    console.log("app started in 3000");
})