var express = require('express');
var router = express.Router();

var ctrlReviews = require('./controllers/review.controller')

router.get('/reviews', ctrlReviews.readReviewsAll)
router.get('/reviews/:reviewid', ctrlReviews.reviewsReadOne)
router.get('/reviews/sort', ctrlReviews.reviewSorted)
router.get('/reviews/select', ctrlReviews.reviewSelected)
router.post('/reviews', ctrlReviews.reviewCreate)
router.put('/reviews/:reviewid', ctrlReviews.reviewUpdateOne)
router.delete('/reviews/:reviewid', ctrlReviews.reviewDeleteOne)
router.get('/QueryExample', ctrlReviews.queryPage)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
