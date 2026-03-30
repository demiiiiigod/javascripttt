// function saymyname(){
//     console.log("a")
//     console.log("m")
//     console.log("a")
//     console.log("n")
//     }
// saymyname()

// // function addtwonumbers(number1,number2){
// //     console.log(number1 + number2)
// // }
// function addtwonumbers(number1,number2){
//     // let result = number1 + number2
//     // return result

//     return number1+number2
// }
// // addtwonumbers(5,45)
 
// const result = addtwonumbers(4,10)
// console.log("result : " , result)

// function loginusername(username){
//      return `${username} just logged in`
// }

// console.log(loginusername("aman"))


// function loginusername(username = "sam"){

    // we have declared the value of username deafult to sam then this conditonal will never execute becouse we have an deafult value 
//     if(!username){
//         console.log("please enter a username")
//         return
//     }
//      return `${username} just logged in`
// }

// console.log(loginusername())

function countcartprice(val1,val2,...num1){
    return num1
}
console.log(countcartprice(1,23,45,456))

const user ={
    username : "aman",
    price : 199,
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user)
handleobject({
    username : "sam",
    price : 3777,
})

const mynewarray = [122,34,45,6,4,3]
function getsecondvalue(getarray){
    return getarray[1]
}
console.log(getsecondvalue(mynewarray))
console.log(getsecondvalue([1,23,45,67]))