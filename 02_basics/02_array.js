const marvel = ["thor","hulk"]
const dc  = ["suoerman" ,"flash"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[2][1]);

let allhero = marvel.concat(dc)
console.log(allhero);

let all_hero = [...marvel,...dc]
console.log(all_hero);

const anpotherarray = [1,2,3,[3,4],6,[4,5,[7,8]]]
console.log(anpotherarray.flat(Infinity))

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name :"hitesh"}))

score1 = 100
score2 = 200
score3 = 300
console.log(Array.of(score1,score2,score3))