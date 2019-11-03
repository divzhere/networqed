const express = require('express');
const mongoose = require('mongoose');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//Connect to mongoDB
mongoose
    .connect(db, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=>console.log('mongodb connected'))
    .catch(err=>console.log(err))

//server 
app.get('/', (req,res)=> res.send('Hello World!'));

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server running on port ${port}`));

