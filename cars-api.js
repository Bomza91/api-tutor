
var makes = ['Volkswagen', 'Toyota', 'Nissan', 'Ford'];

var models = {

  'Volkswagen' : ['Golf', 'Polo', 'Touran', 'Jetta'],
  'Toyota' : ['Corolla', 'Tazz', 'Hilux', 'Yaris'],
  'Nissan' : ['Juke', 'Qashqai', 'Micra', 'Sentra'],
  'Ford' : ['Focus', 'Fiesta', 'EcoSport', 'Ranger']

};

const colors = ['blue', 'red', 'orange', 'white', 'grey'];
const regNumbers = ['CJ', 'CY', 'CL', 'CK', 'CA', 'CF'];


function randomNumber(max){
  return Math.floor(Math.random() * max);
}

function createCar(){

    const make = makes[randomNumber(4)];
    const model = models[make][randomNumber(4)];
    const color = colors[randomNumber(4)];
    const reg_number = regNumbers[randomNumber(6)] + ' ' + randomNumber(100000);

    return {
      make,
      model,
      color,
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

    const createCars = function(req, res, next){

        var carCount = req.params.car_count || 30;

        //console.log(JSON.parse(JSON.stringify(cars)))
        res.json(listOfCars(carCount));
    }

    return {
        createCars
    }
}
