module.exports = {
  name: "queryFail",
  discription: "unable to get any sets from db or api",
  execute(message, args) {
    fail=(message, args)=>{return message.channel
    .send(`Couldnt find anything on Brickset with the set number: '${args}'.
            
Please supply a valid Brickset Starwars set number.`);
  }
  console.log(`Send failed query message`)
  console.log(`------------End Process------------`)

fail(message,args)
}

}