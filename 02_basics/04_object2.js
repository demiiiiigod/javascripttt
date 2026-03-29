// const tinderuser = new Object() // singleton

// const tinderuser2 = {} // non singleton
// tinderuser2.id = 122432
// tinderuser2.name = "aman"
// console.log(tinderuser)
// console.log(tinderuser2)

// const employee = {
//     email : "raop99980@gmail.com",
//     fullname : {
//         username : {
//             name : "aman yadav"
//         }

//     }
// } 
// console.log(employee.fullname.username.name)

// const obj1 = {1:"a" , 2 : "b"} 
// const obj2 = { 3 : "a" , 4 : "b"} 
// // obj3  = Object.assign( {},obj1,obj2)
// obj3 = {...obj1,...obj2}
// console.log(obj3)

// const user = [
//     {
//         id : 2,
//         email : "h@gmail.com"
//     }, 
//     {
//         id : 2,
//         email : "h@gmail.com"
//     },
//     {
//         id : 2,
//         email : "h@gmail.com"
//     }
// ]
// user[1].email
// console.log(tinderuser2)
// console.log(Object.keys(tinderuser2))
// console.log(Object.values(tinderuser2))
// console.log(Object.entries(tinderuser2))
// console.log(tinderuser2.hasOwnProperty('email'))

const course = {
    name :"aman",
    couseid : 24334,
}
console.log(course.name)

const { name} = course
console.log(name)