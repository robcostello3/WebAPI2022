var mongoose = require('mongoose')
var Scema = mongoose.Schema

var GameScema = new Scema({
    game:{
        type:String,
        require:true
    }
})

mongoose.model('game', GameScema)