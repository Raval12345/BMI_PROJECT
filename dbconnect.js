const { MongoClient } = require('mongodb');

//database conection
const client = new MongoClient(pathdb)
await client.connect()
const db = client.db(dbname)
const collection = db.collection('login')