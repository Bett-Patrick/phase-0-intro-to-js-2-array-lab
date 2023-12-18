// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]
console.log(cats)


//Using push() to destructively add an element to the end of an array
function destructivelyAppendCat(name="Ralph"){
    return cats.push(name)
}
console.log(destructivelyAppendCat())


//Using unshift() to destructively add an element to the beginning of an array
function destructivelyPrependCat(name="Bob"){
    return cats.unshift(name)
} 
console.log(destructivelyPrependCat())


//Using pop() to destructively remove last element of an array
function destructivelyRemoveLastCat(){
    return cats.pop()
}
console.log(destructivelyRemoveLastCat())


//Using shift() to destructively remove first element of an array
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
console.log(destructivelyRemoveFirstCat())


//Using the spread operator to add element 
//to the end of an array non-destructively
function appendCat(name = "Broom"){
    return[...cats,name]
}
console.log(appendCat())
console.log(cats)


//Using the spread operator to add element 
//to the beginning of an array non-destructively
function prependCat(name = "Arnold"){
    return[name,...cats]
}
console.log(prependCat())
console.log(cats)


//Using slice() to remove last cat non-destructively
function removeLastCat(){
    return cats.slice(0,2)
}
console.log(removeLastCat())
console.log(cats)


//Using slice() to remove last cat non-destructively
function removeFirstCat(){
    return cats.slice(1)
}
console.log(removeFirstCat())
console.log(cats)






