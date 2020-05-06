const Discord = require("discord.js");
const setquery = require("./functions/fetchQuery.js");
const Usage = require("./functions/fetchUsage.js");

module.exports = {
  name: "set",
  description: "command to get set information",
  execute(message, args) {
    //-------- if no arguement was passed, send response
    if (!args.length) {
      return message.channel.send("Please supply a search term!");
    }
    

    //-----start of async function definition to get set information
    const query = setquery.execute(args);
    async function datarequest(a) {
      const response = await a;
      //----- if the set information returns no matches, send an error response
      if (!response.sets.length) {
        return message.channel
          .send(`Couldnt find anything on Brickset with the set number: '${args}'.
                  
Please supply a valid Brickset Starwars set number.`);
      }
      

      //----- wait for set information and turn it into an array ready for embedding
      const [info] = await response.sets;
      const embed = new Discord.MessageEmbed()
        .setTitle(info.number)
        .addFields(
          { name: "Set Name", value: info.name },
          { name: "Released", value: info.year },
          { name: "Pieces", value: info.pieces }
        )
        .setImage(info.image.imageURL);
            
      
      //----- logging how many times the api key has been used
      const count = await Usage.execute()
      console.log(`So far today I have been used ${count} times today`)

      //-----send the information in a message
      message.channel.send(embed);
      
    }
    
    //-----executing the function 
    datarequest(query);

  }
};
