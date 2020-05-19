const fetch = require("node-fetch");

module.exports = {
  name:"query",
  discription:"set number query function",
  execute(args){
    datafetch = async(num) =>{   
      console.log(num);
      return await fetch(
        `https://brickset.com/api/v3.asmx/getSets?apikey=${process.env.AP}&userHash=&params={'setNumber':'${num}-1','theme':'star wars'}`
        
      ).then((response) => response.json()).then(resjson => {return resjson});      
    };
    const sets = datafetch(args)
    return sets
  
  }
}
   