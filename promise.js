// Promise : unresolved, resolved and rejected.

// const promise = new Promise((resolve, reject) =>{
//     reject();
// });

// promise.then(()=>{
//     console.log("Success");
// }).then(()=>{
//     console.log("Finally")
// }).catch(()=>{
//     console.log("Unsuccess")
// })


//////////////
// async code with promise

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         reject(); 
//     }, 3000);
// });

// promise.then(()=>{
//     console.log("Success");
// }).then(()=>{
//     console.log("Finally")
// }).catch(()=>{
//     console.log("Unsuccess")
// })



//////////////
// request with fetch
const url = 'https://jsonplaceholder.typicode.com/posts/';
fetch(url).then((response)=>{
    response.json();
}).then(data => console.log(data)).catch((err)=> console.error(err));




