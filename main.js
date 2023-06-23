// Reference Data Types


// 1.OBJECTS
let person = {
    name : 'Sagar',
    age :30
}
console.log(person)

// Dot Notation
person.name='Bala'

console.log(person)

// Bracket Notation
person['name'] = 'mary'
console.log(person)

// 2. ARRAYS

let colors = ['red','blue']; // square brackets are array literals
console.log(colors)

// Adding values explicitely
colors[2]='violet'
console.log(colors)
colors[3]=100
console.log(colors)

// Array is an object in javascript
console.log(colors.length)


// 3.FUNCTIONS

function greet()
{
    console.log('Hello Sagar!!')
}

greet()

// parameterized function
function hello(name,agee)
{
    console.log('hello ' + name + '.. your age is ' + agee)
}

hello('Bala Sagar',20)

// calculating a value

function square(number)
{
    return number*number
}

console.log(square(4))