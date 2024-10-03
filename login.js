
const loginRouter = require('express').Router()
const { MongoClient } = require('mongodb');




loginRouter.post('/login', async (req, res) => {

    const { name, firstname, lastname, email, gender, age } = req.body;

    try {
        //database conection
        const client = new MongoClient(pathdb)
        await client.connect()
        const db = client.db(dbname)
        const collection = db.collection('login')

        //add data into database
        const result = await collection.insertOne({ name, firstname, lastname, email, gender, age });

        res.status(201).json({ message: 'User data inserted successfully', result })

    } catch (error) {

        console.log(error)
        res.status(500).json({ error: error})

    }

});

module.exports = loginRouter

// app.get('/login', async (req, res) => {
//     try {
//         //database conection
//         const client = new MongoClient(pathdb)
//         await client.connect()
//         const db = client.db(dbname)
//         const collection = db.collection('login')
//         //find all records
//         const cursor = await collection.find({});
//         const results = await cursor.toArray();
//         res.json(results);
//     } catch (error) {
//         console.error('Error fetching records:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });


//FInd by id

// app.get('/login/:id', async (req, res) => {
//     const id = req.params.id;

//     try {
//         const query = { _id: new ObjectID(id) }; 
//         const result = await collection.findOne(query);

//         if (!result) {
//             return res.status(404).json({ error: 'Record not found' });
//         }

//         res.json(result);
//     } catch (error) {
//         console.error('Error fetching record by ID:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });