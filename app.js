// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

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

app.post("/compose", (req, res)=>{ 
    const post = {
        title: req.body.postTitle,
        content: req.body.postContent
    };
    posts.push(post);
    res.redirect("/");
})

app.get("/compose", (req, res)=>{
    res.render("compose");
})

app.get("/posts/:postName", (req,res)=>{
    const reqTitle = req.params.postName;
    posts.forEach( function(post){
        if( reqTitle === post.title ){
            console.log( "Match found" );
        }    
    });
});

app.listen(3000, (req, res)=>{
    console.log("app started in 3000");
})