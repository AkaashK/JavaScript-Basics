/**
 * this keyword and types of binding in Javascript
 * 
 * @author Akaash
 * @since 30.03.2020
 * @version 0.1
 */
// 1)Implicit binding
const team = {
    Lead: 'Benial',
    age: 21,
    greet() {
        console.log(`Hello I am the lead of this team and my name is ${this.Lead}`)
    },
    teammate: {
        name: 'Arun',
        age: 20,
        greet() {
            console.log(`Hello I am a part of this team and my name is ${this.name}`)
        }
    }
}

team.greet()
team.teammate.greet()

// 2)Explicit binding
function greet() {
    console.log(`Hello, my name is ${this.name}`)
}

const user = {
    name: 'Arun',
    age: 20,
}
//applying the user object to the greet function
greet.call(user)

//another way of explicit binding
function details(l1, l2, l3) {
    console.log(`Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`)
}

const secondUser = {
    name: 'Benial',
    age: 21
}

const languages = ['Python', 'Javascript', 'C']


//apply() takes the second argument as array and passes the values to l1, l2, l3
details.apply(secondUser, languages)

// 3)new binding
function UserDetails(name, age) {
    this.name = name
    this.age = age
    console.log('Username: ' + name + ', ' +
        'age: ' + age)
}

//new keyword, creates new object and bindes the values to parameters of the function
const me = new UserDetails('Arun', 20)

// 4)window binding
const sayAge = function() {
    console.log(this.age)
}

const setAge = {
    age: 25
}

sayAge() //prints undefined, because the global object window is not having a property age
window.age = 30 //throws error, because window refers to the browser window and not works on node
sayAge() //expected output: 30