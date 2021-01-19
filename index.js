const express = require('express');
const route = require('./routes');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
// const assert = require('assert');
// const url =
//     'mongodb://localhost:27017/OtanicsCosmosDB';

// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }).then(() => console.log('Connected successfully to database'));

// MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to database");
//     const db = client.db(DatabaseName);
//     client.close();
// });

const port = 8000;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});