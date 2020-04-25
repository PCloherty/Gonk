const { Client, MessageEmbed } = require("discord.js");
const { config } = require("dotenv");
const fetch = require("node-fetch");

const client = new Client();
const prefix = "!";

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "set") {
    console.log(`${args}`);

    if (!args.length) {
      return message.channel.send("Please supply a search term!");
    }
    const { sets } = await fetch(
      `https://brickset.com/api/v3.asmx/getSets?apikey=${process.env.AP}&userHash=&params={'setNumber':'${args}-1','theme':'star wars'}`
      
    ).then((response) => response.json());
    
    console.log("fetch request done");
    
    if (!sets.length){
        return message.channel.send(`Couldnt find anything on brickset with the set number: ${args}, please supply a valid brickset Starwars set number`)
    }

    const [answer] = sets;
    console.log("json turned into array");
    const embed = new MessageEmbed()
      .setTitle(answer.number)
      .addFields(
        { name: "Set Name", value: answer.name },
        { name: "Released", value: answer.year}
      )
      .setImage(answer.image.imageURL);
    console.log("message ready");
    message.channel.send(embed);
    console.log("message sent");
  }
});

config({
  path: __dirname + "/.env",
});

client.login(process.env.BT);
