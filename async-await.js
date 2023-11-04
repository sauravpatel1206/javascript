
//note after await that goes into catch block
let p1 = new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("done")
},4000);
})



async function saurav(){

let data=await p1;
console.log("data",data)
console.log("this is another")


}

saurav();
console.log("lastg call")


