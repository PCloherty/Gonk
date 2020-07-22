
const fetchUsage = require("../functions/fetchUsage.js")

module.exports ={ 
    name:"usage",
    discription:"request how many times the API key has been used",
    execute(){
        const query= fetchUsage.execute()
        let request = async(a) =>{
            const res = await a;
            console.log(`So far the api has been called ${res} times today`)
        }
        request(query)

    }

}