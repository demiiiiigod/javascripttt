// const score = 100
// const scorevalue = 100.3
// const temp = null
// const isloggedin = false

// let useremail;

// const id = Symbol("123")
// const anotherid = Symbol("123")


// console.log(id === anotherid)

// const bignumber = 135632643223421462147n
// console.log(typeof bignumber)

// const heroes = ["shaktiman","lalu yadav", "aman"]
// let obj = {
//     name: aman,
//     age : 18,
// }
// const myfunction = function(){
//     console.log("aman")
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  memory type
// stack (primitive) and heap(non-primitive)

let myyoutube = "amanydv"
let anothername = myyoutube
anothername = "raoshabh"
console.log(myyoutube)
console.log(anothername)

let userone = {
    email : "aman@ydv",
    upi : "user@ybl"
}

usertwo = userone

usertwo.email = "amanydv"

console.log(userone.email)
console.log(usertwo.email)
