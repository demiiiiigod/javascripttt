const num = [1,2,34,5,6,8]

// const newnum = num.map((num)=>{return num*10})

const newnum = num.map((num)=> num *10).map((num)=> num+1).filter((num)=>num>40)

console.log(newnum)