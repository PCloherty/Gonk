const fetch  = require("node-fetch");

module.exports = {
    name:"usage",
    discription:"usage log per request",
    execute(){
        let logfetch, count, log;
        logfetch = async() =>{
            log = await fetch(
                `https://brickset.com/api/v3.asmx/getKeyUsageStats?apikey=${process.env.AP}`
                ).then((response) => response.json()
                ).then(json=>json.apiKeyUsage[0]
            );
            count = log.count
            return count
        }
        return logfetch()
    }
}



   