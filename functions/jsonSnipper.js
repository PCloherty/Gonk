
module.exports={
    name:"snipper",
    discription:"trim the json response for only the info needed",
    execute(response){

    snipped = async (response) =>{
        const requestedInfo = ['number','name','year','theme','pieces','minifigs','image','LEGOCom']
        const snippedInfo = []
        if (response.length === 0){
            return null
        } else {
            const resarr = Object.entries(response[0])
            for (let i = 0; i < resarr.length; i++) {
                for (let j = 0; j < requestedInfo.length; j++) {
                    if (resarr[i][0]!==requestedInfo[j]){
                        continue
                    } else {
                        if (resarr[i][1] === undefined){
                            continue
                        } else {
                            snippedInfo.push(resarr[i])
                        }
                    };
                }          
            }
            const desiredInfo=Object.fromEntries(snippedInfo)
            return desiredInfo
        }
    }
    return snipped(response)
}
}