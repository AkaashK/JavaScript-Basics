/**
 * Generator function in Javascript => To pause a execution and resume where it has stopped previously
 * 
 * @author Akaash
 * @since 30.03.2020
 * @version 0.1
 */
function * generatorFunction() {
    console.log('This will be executed first.')
    yield 'Hello, ' 
    console.log('I will be printed after the pause')  
    yield 'World!'
  }

  //next() function call should be equal to the number of yields used in the generator function
  const generatorObject = generatorFunction()
  console.log(generatorObject.next().value) //yield in line 3
  console.log(generatorObject.next().value) //yield in line 5
  console.log(generatorObject.next().value) //prints undefinded, since no yield available and sets the done property to true

  //generator function with endless yield values
function* powerSeries(number, power) {
    let base = number
    //endless generator function for power of n number series
    while (true) {
        yield Math.pow(base, power)
        base++
    }
}

let calculatePowerSeries = powerSeries(1,2)

console.log(calculatePowerSeries.next().value)
console.log(calculatePowerSeries.next().value)
console.log(calculatePowerSeries.next().value)