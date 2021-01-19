// const userModel = require('./../models/UserModel');
// const uri =
//     "mongodb://localhost:27017/";
// const client = new MongoClient(uri);
const User = require('./../models/UserModel');
const Ponds = require('./../models/PondModel');

    exports.check_account = (req, res) => {
        const testUser = new User({
            name: 'Bui Phuoc Quoc',
            email: 'phuocnguyen15@gmail.com',
            password: '12345689',
            passwordConfirm: '12345689'
        })
        testUser.save().then(doc => {
            res.status(200).json({
                message: doc
            })
        }).catch(err => {
            res.status(400).json({
                message: 'Error !!!!!'
            })
        })
        // res.status(201).json({
        //     message: "OK olala"
        // })
    }

    exports.get_otp = (req, res) => {

    }

    exports.register = (req, res) => {

    }

    exports.login = (req, res) => {

    }

    exports.logout = (req, res) => {

    }

    exports.get_profile = (req, res) => {
        const testPond = new Ponds({
            name: 'Bui Phuoc Nguy',
            email: 'phuocnguy@gmail.com',
            password: '12345689',
            passwordConfirm: '12345689'
        })
        testPond.save().then(doc => {
            res.status(200).json({
                message: doc
            })
        }).catch(err => {
            res.status(400).json({
                message: 'Error !!!!!'
            })
        })
    }

    exports.users = (req, res) => {

    }

    exports.farms = (req, res) => {

    }

    exports.zones = (req, res) => {

    }

    exports.modules = (req, res) => {

    }

    exports.ponds = (req, res) => {

    }
