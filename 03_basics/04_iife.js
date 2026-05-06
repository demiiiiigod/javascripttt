// immediately invoked function expression(IIFE)

(function chai()
    {
        console.log('DB connected');
    }
)();
((name) =>{
    console.log('db connected two');
})('aman');