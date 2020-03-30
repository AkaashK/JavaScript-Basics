/**
 * CLosure function in Javascript
 * 
 * @author Akaash
 * @since 30.03.2020
 * @version 0.1 
 */
//closure function => function inside a function
function makeAdd(x) {
    return function add(y) {
        return x + y
    }
}

let addNumberTwo = makeAdd(10) //This function call returns a function with y as parameter
console.log(addNumberTwo(2)) //The returned function is passed the value of y and x, y are added and displayed the result