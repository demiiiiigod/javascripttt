// const user = {
//     username  : "hitesh",
//     price : 999,
//     welcomemessage : function(){
//         console.log(`${this.username} , welcome to company`)
//         console.log(this)
//     }
// }

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this)

// function chai (){
//     let username = "jitesh"
//     console.log(this.username)
// }

// const chai = () => {
    
//     let username = "jitesh"
//     console.log(this)

// }
// chai()

// const add = (num1,num2)=> num1+num2
const add = (num1,num2) => ({username : "hitesh"})

console.log(add(3,4))

