const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const carPassing = function (cars, speed) {
  // Your code in here ...
  time = Date.now();
  var arr = {
    time: time,
    speed: speed
  }
  cars.push(arr);
  return cars;
}

const speed = 38;

carPassing(cars, speed);


