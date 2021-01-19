const validator = require('validator');
const mongoose = require('mongoose');
// const assert = require('assert');
// const url =
//     'mongodb://localhost:27017/OtanicsCosmosDB';

// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }).then(() => console.log('Connected successfully to database'));

const pondSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nhap ten']
    },
    email: {
        type: String,
        required: [true, 'Nhap email!'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Invalid email']
    },
    password: {
        type: String,
        required: [true, 'Nhap mat khau'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        require: [true, 'Xac nhan mat khau']
    }
});

const Ponds = mongoose.model('Ponds', pondSchema);

module.exports = Ponds;