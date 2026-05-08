// for of

let arr = [1,2,3,4,5];

for (const num of arr) {
    console.log(num);
}

const mygreetings = "hell world";
for (const greet of mygreetings) {
    console.log(greet);
}

const map = new Map()
map.set('aman','yadav')
map.set('am','singh')
map.set('ama','rao')
console.log(map)


for (const [key,value] of map) {
    console.log(key ,'---' ,value)
}