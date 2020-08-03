module.exports = {
    name:"defaultVersion",
    discription:"set number variation to -1 if no number was included",
    execute(args){
        console.log(args)
    if(args[0].includes("-")){
        return args[0]
    } else {
        return `${args[0]}-1`
    } 
}
}