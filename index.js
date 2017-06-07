const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
//const session = require('express-session');

const CarsAPI = require('./cars-api');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//app.use(express.static('public'));

// app.use(session({
//   secret: '@pp Factori3',
//   resave: false,
//   saveUninitialized: true
// }))

//app.use(flash());

const carsAPI = CarsAPI();

app.get('/api/cars', carsAPI.createCars);

var port = process.env.port || 3007;
http.listen(port, function(){
    console.log('running at port :' , port)
});
