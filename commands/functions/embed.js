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
          { name: "Set Name", value: info.name, inline:true },
          { name: "Pieces", value: info.pieces, inline:true},
          {name:"Minifigure Count", value:info.minifigs,inline:true}
        );
        if(price !== undefined ){
          embeded.addFields(
            { name:"Original RRP(US)", value:`$${price}` ,inline:true})
        };
        embeded.addFields(
          { name: "Released", value: info.year,inline:true }
        )
        embeded.setImage(info.image.imageURL);


        
      //-----send the information in a message
      message.channel.send(embeded);
      
    }
    }

