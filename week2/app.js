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

require('./models/Game')
var Game = mongoose.model('game')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())

/*var Game = mongoose.model('Game', {nameofGame:String})

var game = new Game({nameofGame:"Skyrim"})

game.save().then(function(){
    console.log("Game Saved")
})*/

app.post('/saveGame', function(req, res){
    console.log("Request Made")
    console.log(req.body)

    new Game(req.body).save().then(function(){
        res.redirect('gamelist.html')
    })
})

app.get('/getData', function(req, res){
    Game.find({}).then(function(game){
        console.log("Retriving Games")
        res.json({game})
    })
})

app.post('/deleteGame', function(req, res){
    console.log("Game Deleted", req.body._id)
    Game.findByIdAndDelete(req.body._id).exec()
    res.redirect('gamelist.html')
})

app.use(express.static(__dirname+"/views"))
app.listen(3000, function(){
    console.log("Listening on Port 3000")
})