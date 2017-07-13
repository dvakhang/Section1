const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes/routes");
const dotenv = require('dotenv');
const path = require('path');
const sass = require('node-sass-middleware');
const mongodb = require("./config/connectDb")
var jsonParser = bodyParser.json();
dotenv.load({ path: '.env' });

const sassOpts = {
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public/assets/css'),
  outputStyle: 'compressed',
  prefix: '/assets/css'
};


app.set("view engine", "pug");

mongodb.connect(function(err, status){

    app.get("/hello/:id", function(req, res){
    mongodb.model("Product").find(function(err, product){
        res.send(product);
    });
    //res.send("test " + req.params.id);
    });

    app.post("/hello", jsonParser, function(req, res){
        let userName = req.body.userName;
        let pass = req.body.pass;
        let processTest = process.env.URL;
        console.log(process.env.URL);
        res.send("Username: "+userName+" and pass: " + processTest);
    });

    /**
     * Serve static files
     */
    app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
    app.use('/', (req, res, next) => {
    if (req.path.indexOf("assets") < 0) {
        const segments = req.path.split("/");
        console.log(`Segments...`, segments);
        if (segments.length > 1) {
        res.locals.activePage = segments[1];
        } else {
        res.locals.activePage = "";
        }
    }
    next();
    }, routes);
    app.use(sass(sassOpts));
    console.log(process.env.MONGODB_URI);
    app.listen(3000, function(){
        console.log("Running at port: 3000");   
    });

});
