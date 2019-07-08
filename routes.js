// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const resourcesRoutes = require('./routes/resources');


const resource = require('./models/resource');


// Our home page
app.get('/', (req, res) => {
  res.render('pages/home');
});
// Our home page
app.get('/show', (req, res) => {
  res.render('pages/show');
});
app.get('/new', (req, res) => {
  res.render('pages/new');
});
app.get('/edit', (req, res) => {
  res.render('pages/edit');
});

app.post("/addBook", (req, res) => {
 var myData = new resource(req.body);
 myData.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
//    console.log('submitted to databse')
});


// Your route file for your resource

// Exporting the changes
module.exports = app;