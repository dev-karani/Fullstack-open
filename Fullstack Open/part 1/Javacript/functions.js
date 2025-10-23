//creating arrow functions
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result  = sum(1,5)
console.log(result)

//single parameter == no parentheses
const square = p => {
    console.log(p)
    return p * p

}
//or braces
const squares = p => p * p

console.log(squares(2))

//function declaration
function product(a,b){
    return a + b
}
const result1  = product(2.6)


//function expression
const average = function(a,b) {
    return (a + b) /2
}
const result2 = average(2,5)