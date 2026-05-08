const j = [1,2,3,4,5,56]

j.forEach(function(val){
    console.log(val)
})
j.forEach((item)=>{
    console.log(item)
})

j.forEach(function(val,index,arr){
    console.log(val ,index ,arr)
})

const my = [{
    
        c:"y"
    
},
{
    y:"k"
}]

my.forEach((item)=> {
    console.log(item.y)
})