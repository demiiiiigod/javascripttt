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


function loginusername(username = "sam"){

    // we have declared the value of username deafult to sam then this conditonal will never execute becouse we have an deafult value 
    if(!username){
        console.log("please enter a username")
        return
    }
     return `${username} just logged in`
}

console.log(loginusername())