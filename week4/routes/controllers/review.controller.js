var debug = require('debug')('demo')
var Review = require('../models/review.model')

function sendJSONResponse(res, status, content){
    res.status(status)
    res.json(content)
}



module.exports.readReviewsAll = function(req, res){
    debug('Getting all reviews')
    console.log('Getting all reviews')
    Review.find().exec().then(function(results){
        sendJSONResponse(res, 200, results)
    }).catch(function(err){
        sendJSONResponse(res, 404, err)
    })

}

module.exports.reviewsReadOne = function(req, res){
    debug('Reading one review')
    console.log('Reading one review')
    
}

module.exports.reviewCreate = function(req, res){
    debug('Create one review')
    console.log('Create one review', req.body)

    Review.create({
        author:req.body.author,
        rating:req.body.rating,
        reviewText:req.body.reviewText
    }).then(function(dataSaved){
        sendJSONResponse(res, 201, dataSaved)
    }).catch(function(err){
        debug(err)
        sendJSONResponse(res, 404, err)
    })
    
}

module.exports.reviewUpdateOne = function(req, res){
    debug('Update one review')
    console.log('Update one review')
    
}

module.exports.reviewDeleteOne = function(req, res){
    debug('Delete one review')
    console.log('Delete one review')

    if(!req.params.reviewid){
        sendJSONResponse(res, 404, {"message":"Not found...request id require"})
        return
    }
    Review.findByIdAndDelete(req.params.reviewid).exec().then(
        function(reviewData){
            console.log("Review ID " + req.params.reviewid + " deleted")
            debug(reviewData)
        }
    ).catch(function(err){
        sendJSONResponse(res, 404, err)
    })
}