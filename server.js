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
      res.send("pickcategorie.html");
});

app.listen(3333, function(){
      console.log('server running at http://localhost:3333');
});
