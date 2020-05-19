const setquery = require("./functions/fetchQuery.js");
const Usage = require("./functions/fetchUsage.js");
const embed = require("./functions/embed.js")

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
      //----- logging how many times the api key has been used
      
      embed.execute(message,response)
    }
    //-----executing the function 
    datarequest(query);
  }
};
