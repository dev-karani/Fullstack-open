//1.arrays and array methods
let t= [1, -1,3]

t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value =>{
    console.log(value)
})

console.log(t)
//concat is preferred as it is in functional programming paradigm
const t2a = t.concat(5)
console.log("t2a is : ",t2a)



//2. map function
const m1 = t.map(value => value * 2)
console.log(m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)


//3. destructured assignment
const p = [1,2,3,4,5]
const [first,second, ...rest] = p
console.log(first, second)
console.log(rest)