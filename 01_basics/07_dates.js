// dates

let mydate = new Date()
console.log(mydate)
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toString)

let createmynewdate = new Date(2023 ,0,23)
console.log(createmynewdate)

let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(createmynewdate.getTime())
console.log(Math.floor(Date.now()/1000))

let myenewdate = new Date()
console.log(myenewdate.getMonth())
console.log(myenewdate.getDay())

myenewdate.toLocaleString('default',{weekday:"long"})