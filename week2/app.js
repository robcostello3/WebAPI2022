var express = require('express')
var app = express()
var path = require('path')
var bodyparser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/gameEntries', {
    useNewURLParser:true
}).then(function(){
    console.log("Connected to Mongo DB Database");
}).catch(function(err){
    console.log(err)
})

var Game = mongoose.model('Game', {nameofGame:String})

var game = new Game({nameofGame:"Skyrim"})

game.save().then(function(){
    console.log("Game Saved")
})

app.use(express.static(__dirname+"/views"))
app.listen(3000, function(){
    console.log("Listening on Port 3000")
})