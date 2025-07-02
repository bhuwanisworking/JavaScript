const User={
    name:"bhuwan",
    age:20,
    work:()=>{
        console.log("walking user")
    }
}
// let a=new User(); this will work when we have constructor
console.log(User)

let arr=[1,2,3]
for(let index=0;index<arr.length;index++){
    console.log(arr[index])
}
let ans=arr.map((num)=>{
    return num*num;
})
console.log(ans)

let ans3=arr.filter((num)=>{
    if(num%2==0) return true;
})
console.log(ans3)