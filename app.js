const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const pathdb = 'mongodb://localhost:27017';
const dbname = 'Bmidb';
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.post('/api/bmi',(req,res)=>{


    const result = req.body.weight/(req.body.height*req.body.height)

    res.status(200).json({bmi:result})

})


//app.use('/login', require('./login'));
//app.use('/bmicalculate', require('./bmicalculate'));

app.listen(4000, () => {
    console.log("App started on port 4000");
});

// const libexpress = require('express')

// const { MongoClient, ObjectID } = require('mongodb');

// const pathdb = 'mongodb://localhost:27017'
// const dbname = 'Bmidb'


// const app = libexpress()

// app.use(libexpress.json());


// app.use('/login',require('./login'))

// app.use(bmicalculate)



// app.listen(4000, () => {
//     console.log("App Started on port 4000");
// })