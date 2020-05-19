const Discord = require("discord.js");

module.exports={
    name:"embed",
    discription :"embed the responses to be send",
    execute(message,response){
    
    const [info] = response.sets;
    const price = info.LEGOCom.US.retailPrice;
    console.log(price)

    

    const embeded = new Discord.MessageEmbed()
        .setTitle(info.number)
        .addFields(
          { name: "Set Name", value: info.name },
          { name: "Released", value: info.year },
          { name: "Pieces", value: info.pieces }
        );
        if(price !== undefined ){
          embeded.addFields(
            { name:"Original RRP($)", value:price })
        };
        embeded.setImage(info.image.imageURL);


        
      //-----send the information in a message
      message.channel.send(embeded);
      
    }
    }

