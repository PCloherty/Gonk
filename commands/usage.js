
const fetchUsage = require("./functions/fetchUsage.js")

module.exports ={ 
    name:"usage",
    discription:"request how many times the API key has been used",
    execute(message){
        const query= fetchUsage.execute()
        let request = async(a) =>{
            const res = await a;
            message.channel.send(`So far today I have been used ${res} times today`)
        }
        request(query)

    }

}