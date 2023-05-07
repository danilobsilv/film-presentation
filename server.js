const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

//  to execute the script, "npm run dev"

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  express: app,
  noCache: true,
});

app.get('/', function(req, res) {
      return res.render("pickcategorie.html");
});

app.get("/session1", function(req, res) {
      res.render("bestmovies.html");
});

app.get("/session2", function(req, res){
      res.render("lowermoviescreen.html");
})

app.get("/session3", function(req, res){
      res.render("bestmovies2021.html");
})

app.get("/session4", function(req, res){
      res.render("bestmovies2022.html");
})

app.listen(3333, function(){
      console.log("SERVER IS RUNNING!\n")
      console.log('PORT:  http://localhost:3333');
});
