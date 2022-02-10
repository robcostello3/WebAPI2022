var mongoose = require('mongoose')

var reviewSchema = new mongoose.Schema({
    author:String,
    rating:{
        type:Number,
        require:true,
        min:0,
        max:5
    },
    reviewText:String,
    createdOn:{
        type:Date,
        'default': Date.now
    }

})

let Review = mongoose.model('Review', reviewSchema)

module.exports = Review