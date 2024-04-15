const {MongoClient} = require('mongodb');


const url = "mongodb://127.0.0.1:27017/category"
const client = new MongoClient(url);

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('db connected success...');
    
    return client.db();

}
module.exports = main;

//   
// 
// 
//   
//   
// 
// 
