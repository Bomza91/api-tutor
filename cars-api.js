
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

var cars = [];

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

const listOfCars = function(){

    if (cars.length === 0){
        for(var i=0;i<100;i++){
            cars.push(createCar())
        }
    }

    return cars
}

module.exports = function(){

    const carsOfColor = function(req, res, next){
        let color = req.params.color;
        let theCars = listOfCars();
        res.json(theCars
                .filter((car) =>
                    car.color.toLowerCase() === color.toLowerCase() ));

    };

    const carsOfMake = function(req, res, next){
        let make = req.params.make;
        let theCars = listOfCars();

        res.json(theCars
                .filter((car) =>
                    car.make.toLocaleLowerCase() === make.toLowerCase()
                ));
    };

    const carsOfColorAndMake = function(req, res, next){
        let color = req.params.color;
        let make = req.params.make;
        let theCars = listOfCars();

        res.json(theCars
                .filter((car) =>
                    car.color.toLowerCase() === color.toLowerCase()
                    && car.make.toLocaleLowerCase() === make.toLowerCase()
                ));

    };

    const showColors = function(req, res, next){
        res.json(colors);
    };

    const showMakes = function(req, res, next){
        res.json(makes);
    };

    const createCars = function(req, res, next){
        res.json(listOfCars());
    }

    return {
        makes : showMakes,
        colors : showColors,
        carsOfColor,
        carsOfMake,
        carsOfColorAndMake,
        createCars
    }
}
