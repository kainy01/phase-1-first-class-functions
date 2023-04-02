function receivesAFunction(callback){
    return callback();
}
// const fn=(()=>{

// })
function returnsANamedFunction(){
    return function bh(){
        console.log ("hey");
    }
}

function returnsAnAnonymousFunction(){
    return  ()=>"hey";
}