const fetch = require("node-fetch");
const snipper= require('./jsonSnipper.js');

module.exports = {
  name:"query",
  discription:"set number query function",
  execute(args){ 
    datafetch = async(num) =>{  
      return await fetch(
        `https://brickset.com/api/v3.asmx/getSets?apikey=${process.env.AP}&userHash=&params={'setNumber':'${num}'}`
      ).then((response) => response.json()).then(resjson => {return snipper.execute(resjson.sets)}); 
      
    };
    
    const sets = datafetch(args)
    return sets
  
  }
}
   