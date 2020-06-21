const { MongoClient } = require("mongodb");
const setQuery = require("./fetchQuery.js");
const embed = require("./embed.js");
const queryFail = require('./queryfail.js');

module.exports = {
  name: "MongoConnect",
  discription: "mongodb related functions like checking db or writing to db",
  execute(message, args) {
     main = async (message, args) => {
      const url = process.env.mongourl;
      const client = new MongoClient(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      try {
        await client.connect();
        await check(message, client, args);
      } catch (e) {
        console.error(e);
      } finally {
        await client.close();
      }
    }

    check = async (message, client, args) => {
      const result = await client
        .db("GonkDB")
        .collection("sets")
        .findOne({ number: `${args}` });
      if (result) {
        
        console.log(`database check successful`);
        embed.execute(message, result);
      } else {
        console.log("database check failed, searching on api");
        const res = await setQuery.execute(args); 
        if (res) {
            console.log(`Api check successful`)
            await write(client, res);
            await embed.execute(message, res);
          } else {
            queryFail.execute(message,args)
          }
      }
    }

    write= async (client, info)=> {
        await client.db("GonkDB").collection("sets").insertOne(info);
        console.log(
          `Upload successful,added set number ${info.number}: ${info.name} to the database`
        );
     }
    main(message, args).catch(console.error);
  },
};
