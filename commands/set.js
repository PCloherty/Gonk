const setCheck = require("../functions/mongoConnect.js")

module.exports = {
  name: "set",
  description: "command to get set information",
  execute(message, args) {
    
    if (!args.length) {
      return message.channel.send("Please supply a search term!");
    }
    console.log(`------------start process------------`)
    console.log(`set command executed for set ${args}`)
    setCheck.execute(message,args)

  }
};
