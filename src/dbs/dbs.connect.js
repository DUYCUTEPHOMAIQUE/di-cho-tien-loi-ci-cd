'use strict'

const {default: mongoose} = require('mongoose')

const connectString = 'mongodb+srv://dauhu1232019:Anhyeuem28@cluster01.kmae3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01'

mongoose.connect(connectString)
    .then(_=> console.log("Connect MongoDB successfully!!"))
    .catch(error => console.log("Connect error!!"))

module.exports = mongoose