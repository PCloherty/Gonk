const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");

const client = new Client({
  disableEveryone:true
});
const prefix = "!";

client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`Gonk is online`);

  client.user.setActivity({
     name: "Gonk Strikes Back", type: "WATCHING" 
  });
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;
  
  try {
    client.commands.get(command).execute(message, args);
    
  } catch (error) {
    console.error(error);
    message.reply("There was an error, please dont send me to Jabbas palace");
  }
});

config({
  path: __dirname + "/.env",
});

client.login(process.env.BT);