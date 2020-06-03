const setquery = require("./functions/fetchQuery.js");
const Usage = require("./functions/fetchUsage.js");
const embed = require("./functions/embed.js")

module.exports = {
  name: "set",
  description: "command to get set information",
  execute(message, args) {
    
    if (!args.length) {
      return message.channel.send("Please supply a search term!");
    }
    
    const query = setquery.execute(args);
    async function datarequest(a) {
      const response = await a;
      
      if (!response.sets.length) {
        return message.channel
          .send(`Couldnt find anything on Brickset with the set number: '${args}'.
                  
Please supply a valid Brickset Starwars set number.`);
      }
      
      
      embed.execute(message,response)
    }
    
    datarequest(query);
  }
};
