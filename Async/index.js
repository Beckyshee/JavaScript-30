//synchronous code
// console.log("this executes first");

// for (let i = 0; i <=100000000; i++) {
// console.log("am taking forever to execute");
    
// }

// console.log("this executes second");
// console.log("this executes third");

//callbacks
// function fetchData(url, callback){
//     setTimeout(()=>{
//         const data = "that's my data"
//         callback(data)
//     }, 5000)
// }
// console.log("this executes first");

// fetchData('https://example.com', (data)=>{
//     console.log(data)
// })

// console.log("this executes second");



//promises

// function fetchMoreData(){
//     return  new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const data = "Alot of data"
//             resolve(data)
//         }, 5000)
//     })
// }
// console.log("first");

// fetchMoreData().then((res)=>{
//     console.log(res);
// });


//has issue try resolving
// function isAdult(){
//     return new Promise((resolve, reject)=>{
//         if (age >= 18) {
//             resolve("this is an adult");
//         } else{
//             reject("This is not an adult")
//         }
//     })
// }

// isAdult(20).then((res)=>{
//     console.log(res);
// })




async function takesTime(){
    return new Promise((resolve, reject)=>{
        //code simulation that takes time
        setTimeout(()=>{
            resolve("well! that took a while")
        })
    }, 3000)
}
// async function funcCaller(){
//     let res = await takesTime()
//     console.log(res);
// }
// funcCaller()


//we can also use the IIF
(async function funcCaller(){
        let res = await takesTime()
        console.log(res);
    })()