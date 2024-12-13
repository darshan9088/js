// primitive datatypes:
// 7 types : String, Number, bigInt, Boolean, null, Undefined, Symbol.


// symbols are always unique. if you definned two id : id and anotherId and you pass same vlaue to them but after assign them when you run the code and strictly check the result is : flase due to it's  uniqueness!!
// for example::::

const id = Symbol ('123')
const anotherId = Symbol ('123')

// console.log(id===anotherId)


// this all are datatype which don't need to explain to js that it is boolean or int or string!
// for example::

const value = 12
const str = "darshan"
const logged = true
const name = undefined
const rollNo = null


// Non-Primitive DataTypes:
// 3 types: array, object, functions

// object :
const info = {
    id:123,
    name:"darshan",
    email:"darshan@google.com"
}

console.log(typeof info)

// array:

const heroes = ["Ironman","Spiderman","Butcher"];
// console.log(typeof heroes);


// functions:

const myFunctions = function(){
    console.log("hello world!");
}
// console.log(myFunctions);
