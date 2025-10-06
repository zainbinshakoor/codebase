// function outerFun(){
//     let counter=0;
//     function innerFun(){
//         counter++;
//         console.log(counter);
//     }
//     return innerFun;
// }

// let fn=outerFun();
// fn();
// fn();
// fn();
// fn();

// function counter(){
//     let count=0;
//     return{
//         increment:()=>count++,
//         decrement:()=>count--,
//         get:()=>count
//     }
// }

// let countFunc = counter();
// countFunc.increment();
// countFunc.increment();
// countFunc.increment();
// countFunc.decrement();


// for (let i=0; i<5; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, i*1000)
// }

// console.log("script loaded");

// for (let i=1; i<=5; i++){
//    console.log("count: " + i);
// }

// console.log("script end");

// console.log("script loaded");

// setTimeout(()=>{
//     console.log("inside timeout");
// }, 0)

// console.log("script end");


// setTimeout(()=>{
//     console.log("inside timeout");
// }, 2000)

let counter=0;
const intervalFunc = setInterval(()=>{
    counter++;
    console.log("counter: " + counter);
    if(counter==5){
        clearInterval(intervalFunc);
    }
},2000)

