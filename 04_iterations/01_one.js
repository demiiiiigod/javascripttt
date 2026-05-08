//for

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        // console.log("5 is best")
    }
    // console.log(element);
    
}
for (let i = 0; i < 10; i++) {
    // console.log(`outer loop is ${i}`);
    for (let j = 0; j < 20; j++) {
    //  console.log(`inner loop is ${j}`);
        // console.log(i + '*' + j + '=' + i*j)
    }
    
}
for (let i = 0; i < 20; i++) {
    const element = i;
    if(element==5){
        break;
    }
    console.log(element)
    
}