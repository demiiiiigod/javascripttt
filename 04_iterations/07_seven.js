const arr = [1,2,4]

const newt = arr.reduce(function(Acc,curval) {
     console.log(`acc : ${Acc} and curval ${curval}`)
    return Acc+curval
},0)

console.log(newt)

const course = [
    {
        course : "js",
        price: 3444

    },
    {
        course : "ps",
        price: 3444

    },
    {
        course : "ts",
        price: 3444

    },
    {
        course : "is",
        price: 3444

    },
]

const total= course.reduce((acc,item) => acc+item.price,0)
console.log(total)