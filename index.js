const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');

const CarsAPI = require('./cars-api');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const carsAPI = CarsAPI();

app.get('/v1/cars', carsAPI.createCars);
app.get('/v1/colors', carsAPI.colors);
app.get('/v1/makes', carsAPI.makes);
app.get('/v1/cars/colors/:color', carsAPI.carsOfColor);
app.get('/v1/cars/makes/:make', carsAPI.carsOfMake);
app.get('/v1/cars/makes/:make/colors/:color', carsAPI.carsOfColorAndMake);
app.get('/v1/cars/:car_count', carsAPI.createCars);

var port = process.env.PORT || 3007;
http.listen(port, function(){
    console.log('running at port :' , port)
});
