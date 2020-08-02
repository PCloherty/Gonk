const Discord = require("discord.js");
module.exports={
    name:"embed",
    discription :"embed the responses to be send",
    execute(message,results){
    const fields=[['Set Name',results.name],['Pieces',results.pieces],['Minifigs',results.minifigs],['Original RRP(US$)', results.LEGOCom.US.retailPrice],['Released',results.year]];
    const embeded = new Discord.MessageEmbed()
        .setTitle(results.number)
        for (let index = 0; index < fields.length; index++) {
          const element = fields[index];
          if(element[1] !== undefined || element[1] !== 0 ){
            embeded.addFields(
                {name: element[0], value: element[1], inline:true}
              )
            continue;
          } else {
            continue;
          };
        }
        embeded.setImage(results.image.imageURL);
      //-----send the information in a message
      console.log('Send embed');
      console.log(`------------End Process------------`);
      message.channel.send(embeded);
      
    }
    }

