const { EmbedBuilder } = require("discord.js");
module.exports={
    name:"embed",
    discription :"embed the responses to be send",
    execute(message,results){
    const fields=[['Set Name',results.name],['Theme',results.theme],['Pieces',results.pieces],['Minifigs',results.minifigs],['Original RRP(US$)', results.LEGOCom.US.retailPrice],['Released',results.year]];

    const validFields = fields
      .filter(element => element[1] !== undefined && element[1] !== 0)
      .map(element => ({name: element[0], value: String(element[1]), inline: true}));

    const embeded = new EmbedBuilder()
        .setColor('ff0000')
        .setTitle(results.number)
        .setFooter({ text: "Bot Created by Poor Rick#5522, All information Provided by Brickset." })
        .addFields(validFields)
        .setImage(results.image.imageURL);
      //-----send the information in a message
      console.log('Send embed');
      console.log(`------------End Process------------`);
      message.channel.send({ embeds: [embeded] });
      
    }
    }

