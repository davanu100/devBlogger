const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();


//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDb
mongoose
    .connect(db)
    .then(() => console.log("MongoDb Connected!"))
    .catch(err => console.log(err));


app.get('/',(req,res) => res.send("Hello World!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));