//to create an object with a method
const arto = {
    name: "arto hellas",
    age:25,
    education:'phd',
    greet: function(){
        console.log("hello, my name is " + this.name)
    },
    doAddition: function(a,b){
        console.log(a + b)
    },
}
arto.greet()

//creating a mehod after object was already created
arto.growOlder = function(){
    this.age += 1
}
console.log(arto.age)
arto.growOlder()
console.log(arto.age)

//adding areference variable to a mehtod 
arto.doAddition(1,4)
const referenceToAddition = arto.doAddition
referenceToAddition(10,15)

//since this works with callling contect given, its easy for it to change 
// As mentioned, the value of this in JavaScript is defined based on how the method is being called. When setTimeout is calling the method, it is the JavaScript engine that actually calls the method and, at that point, this refers to the global object.

// There are several mechanisms by which the original this can be preserved. One of these is using a method called bind:

// setTimeout(arto.greet.bind(arto), 1000)copy
// Calling arto.greet.bind(arto) creates a new function where this is bound to point to Arto, independent of where and how the method is being called.