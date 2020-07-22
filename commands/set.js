const setCheck = require("../functions/mongoConnect.js")
const usage = require("../commands/usage");

module.exports = {
  name: "set",
  description: "command to get set information",
  execute(message, args) {
    const User = message.member.user
    if (!args.length) {
      return message.channel.send("Please supply a search term!");
    }
    console.log(`------------start process------------`)
    console.log(`set command executed for set ${args} from '${User.tag}'(${User.id}) in server '${message.guild.name}'(${message.guild.id})`)
    usage.execute();
    setCheck.execute(message,args)

  }
};
