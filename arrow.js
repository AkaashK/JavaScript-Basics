/**
 * Arrow functions in Javascript
 * 
 * @author Akaash
 * @since 30.03.2020
 * @version 0.1
 */
//Arrow Functions
let sum = (a,b) => a + b;
console.log(sum(1,2));

//Multiline Arrow Function
let summation = (a,b,c) => {
    let sum = a + b + c;
    return sum;
}

console.log(summation(4,5,6))

//Weird functionality of arrow functions inside an object
const person = {
    name: 'Akaash',
    age: 20,
    getName: () => {
        console.log(this.name) //prints undefinded, because arrow function will refer to the global this only
    },
    getAge: function() {
        console.log(this.age) //prints the value of age 20, because of the usage of normal function here refers to the object invoking the function
    }
}

person.getName()
person.getAge()