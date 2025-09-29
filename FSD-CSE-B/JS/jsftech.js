const url = "https://api.github.com/users/nishatfatima25"

//fetch is a async func which returns promise
const res = fetch(url);

res.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    console.log("data:", data);
})
.catch((err)=>{
    console.log("Error: ", err);
})
.finally(()=>{
    console.log("finally, khatam!!!")
})