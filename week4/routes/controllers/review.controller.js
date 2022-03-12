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

module.exports.reviewSorted = function(req, res){
    debug('Getting all reviews')
    console.log('Getting all reviews')
    Review.find().exec().then(function(results){

        var temp = results
        const dict = {"0" : parseInt(results[0].rating)}

        for(var x = 1; x < temp.length; x++){
            console.log(temp[x].rating)
            dict[x] = parseInt(temp[x].rating)
        }

        var endR = {0 : "test"}
        var endRctr = 0
        for(var y = 5; y > 0; y--){
            console.log("y = " + y)
            for(var x = 0; x < temp.length; x++){
                console.log(dict[x])
                if(dict[x] == y){
                    console.log(temp.length)
                    console.log(temp[x])
                    endR[endRctr] = temp[x]
                    console.log(endR[0])
                    endRctr = endRctr + 1
                }
            }
        }

        sendJSONresponse(res, 200, endR)

    }).catch(function(err){
        sendJSONResponse(res, 404, err)
    })
}

module.exports.reviewSelected = function(req, res){
    debug('Getting all reviews')
    console.log('Getting all reviews')
    Review.find().exec().then(function(results){

        var temp = results

        var endR = {0 : "test"}

        var k;
        for (k = 0; k < temp.length; ++k){
            if (results[k].author == req) {
                endR = results[k]
                break;
              }
        }

        sendJSONresponse(res, 200, endR)

    }).catch(function(err){
        sendJSONResponse(res, 404, err)
    })
}

module.exports.reviewsReadOne = function(req, res){
    debug('Reading one review')
    console.log('Reading one review')
    
    if(req.params && req.params.reviewid){

        Review.findById(req.params.reviewid).exec().then(
            function(result){
                sendJSONresponse(res,200,result)
            }
        ).catch(function(err){
            sendJSONresponse(res,404,err)
        })
    }else{
        sendJSONresponse(res, 404, {"message":"Review not found."})
    }
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
    if(!req.params.reviewid){
        sendJSONresponse(res, 404, {"message":"Not found...request id required"})
        return
    }

    Review.findById(req.params.reviewid).exec().then(
        function(reviewData){
            reviewData.author = req.body.author;
            reviewData.rating = req.body.rating;
            reviewData.reviewText = req.body.reviewText;
            return reviewData.save()
        }
    ).then(function(data){
        sendJSONresponse(res,200, data)
    }).catch(function(err){
        sendJSONresponse(res, 400, err)
    })
}

module.exports.queryPage = function(req, res){
    res.render("QueryExample", {title: "Query"})
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