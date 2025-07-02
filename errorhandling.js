try{
    console.log(a)
}
catch(err){
    console.log("first declare")
    console.log(err)
    throw new Error("bhuwan error")
}
finally{
    console.log("i will run no matter what ")
}