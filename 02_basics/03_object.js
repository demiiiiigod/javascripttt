// singleton
//object.create

// object literals
const mysmb = Symbol("mykey1")
const jsuser = {
    name: "aman",
    age : 18,
    [mysmb] : "mykey1",
    email : "aman@google.com",
    "full name" : "Aman Yadav",
}

// console.log(jsuser["email"])
// console.log(jsuser.email)
// console.log(jsuser["full name"])
// console.log(jsuser[mysmb])

jsuser.email = "aman@chatgpt.com"
// Object.freeze(jsuser)
jsuser.email = "aman@figma.com"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("Thankyou")
}
jsuser.greeting2 = function(){
    console.log(`Thankyou , ${this.name}`)
}

console.log(jsuser.greeting2())

