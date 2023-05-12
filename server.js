const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  express: app,
  noCache: true,
});


app.get('/main', function(req, res) {
      return res.render("pickcategorie.html");
});


app.get("/login", function (req, res){
      res.render("loginview.html");
});


app.get("/login/registeruser", function (req, res){
      res.render("registeruser.html");
})


app.get("/", function (req, res){
      res.render("landingpage.html");
});


app.get("/main/session1", function(req, res) {
      res.render("bestmovies.html");
});


app.get("/main/session2", function(req, res){
      res.render("lowermoviescreen.html");
})


app.get("/main/session3", function(req, res){
      res.render("bestmovies2021.html");
})


app.get("/main/session4", function(req, res){
      res.render("bestmovies2022.html");
})


app.get("/filmesfavoritos", function(req, res){
      res.render("filmesfavoritos.html")
});


app.get("/sobremim", function(req, res){
      res.render("sobremim.html");
});


app.listen(3333, function(){
      console.log("SERVER IS RUNNING!\n")
      console.log('PORT:  http://localhost:3333');
});
