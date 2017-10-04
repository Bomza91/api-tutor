
var makes = ['Volkswagen', 'Toyota', 'Nissan', 'Ford'];

var models = {

  'Volkswagen' : ['Golf', 'Polo', 'Touran', 'Jetta'],
  'Toyota' : ['Corolla', 'Tazz', 'Hilux', 'Yaris'],
  'Nissan' : ['Juke', 'Qashqai', 'Micra', 'Sentra'],
  'Ford' : ['Focus', 'Fiesta', 'EcoSport', 'Ranger']

};

const colors = ['Blue', 'Red', 'Orange', 'White', 'Grey'];
const regNumbers = ['CJ', 'CY', 'CL', 'CK', 'CA', 'CF'];


function randomNumber(max){
  return Math.floor(Math.random() * max);
}

function randomNumberNotLessThan(lowest, range){
    return lowest + randomNumber(range);
}


function createCar(){

    const make = makes[randomNumber(4)];
    const model = models[make][randomNumber(4)];
    const color = colors[randomNumber(4)];
    const reg_number = regNumbers[randomNumber(6)] + ' ' + randomNumber(100000);
    const price = randomNumberNotLessThan(50000, 100000)

    return {
      make,
      model,
      color,
      price,
      reg_number
    };

}

const listOfCars = function(qty){
    var cars = [];

    for(var i=0;i<qty;i++){
      cars.push(createCar())
    }
    return cars
}

module.exports = function(){


    const carsOfColor = function(req, res, next){
        let color = req.params.car_color;
        res.json(listOfCars(100).filter((car) => car.color.toLowerCase() === color.toLowerCase() ));
    };

    const showColors = function(req, res, next){
        //let color = req.params.car_color;
        res.json(colors);
    };

    const createCars = function(req, res, next){

        var carCount = req.params.car_count || 30;

        //console.log(JSON.parse(JSON.stringify(cars)))
        res.json(listOfCars(carCount));
    }

    return {
        colors : showColors,
        carsOfColor,
        createCars
    }
}
