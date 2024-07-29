// const myprom=()=> new Promise(resolve=>{setTimeout(resolve, 2000)})

// async function iterateWithAsyncAwait(arr){
//     try{
//    for (let i= 0; i<arr.length; i ++){
//     console.log(arr[i])
//     await myprom(); 
//    }
// }
// catch(err){
//     console.log("errrrrrrrrrrrrrrr")
// }
// }

// iterateWithAsyncAwait([1,2,3,4])

// async function awaitCall(){
//     try{
//         const response= await fetch("https://jsonplaceholder.org/users")
//             const data= await response.json()
//             console.log(data)
//     }
//     catch(err){
//         console.log("erreur de données", err)
//     }
// }
// awaitCall()

    const promise1=()=> new Promise((resolve, reject)=>{setTimeout(()=>resolve("promise 1",2000))})
    const promise2=()=>  new Promise((resolve, reject)=>{setTimeout(()=>resolve("promise 2",2000))})
    const promise3=()=>  new Promise((resolve, reject)=>{setTimeout(()=>resolve("promise 3",2000))})

async function chainedAsyncFunctions(){ 
await Promise.all([promise1(), promise2(), promise3()])
.then((res)=>console.log(res))
.catch((error)=>console.log(error))
}

chainedAsyncFunctions()