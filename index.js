/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  // ✨ implement
  let newKey = {}
    for(let props in obj) {
      newKey[props] = obj[props].trim()
    }
    return newKey
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  // ✨ implement
  for (let props in obj) {
    obj[props] = obj[props].trim()
  }
  return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  // ✨ implement
  let largeInt = 3
  for(let i=0; i < integers.length; i++) {
    if(integers[i].num > largeInt) {
      largeInt = integers[i].num
    } 
    return largeInt
  }
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed
    this.count = initialNumber
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    // ✨ implement
    return this.count > 0 ? this.count -- : 0
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed
    this.seasons = ["summer", "fall", "winter", "spring"]
      this.newSeason = 0
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    // ✨ implement
    let curSeason = this.seasons[this.newSeason]
    if(this.newSeason === 3) {
      this.newSeason = 0
    } else {
      this.newSeason++
    }
    return curSeason
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.car = name // name of the car
    this.odometer = 0 // car initializes with zero miles
    this.tank = tankSize // car initiates full of gas
    // ✨ initialize whatever other properties are needed
    this.fuel = tankSize // fuel of car determines how much fuel available inside the tank
    this.mpg = mpg // how much miles per gallon does the car travels
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    // ✨ implement
    const milesDriven = this.tank * this.mpg
    if(distance <= milesDriven) { 
      this.odometer = this.odometer + distance
      this.tank = this.tank - (distance/this.mpg) 
    } else {
      this.tank = 0
      this.odometer = this.odometer + milesDriven
    }
    return this.odometer
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    // ✨ implement
    const tankGallons = this.fuel - this.tank
    if(gallons <= tankGallons) {
      this.tank = this.tank + gallons
    } else {
      this.tank = this.fuel
    }
    return this.tank * this.mpg
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  // ✨ implement
  if(!number || typeof number !== "number"){
    return false
  } 
    if(number % 2 === 0) {
      return true;
    } else {
      return false;
    }
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
