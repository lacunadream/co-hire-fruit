const express = require('express');
const router = express.Router();
const fs = require('fs');
const Fruits = require('../models/Fruits')
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

router.get('/', function(req, res) {
	res.redirect('/search/orange')
})

router.get('/search/:fruit', function (req, res) {
  res.render('index', { title: 'Fruit Store | '+ req.params.fruit});
});


router.get('/api/getfruits/:fruit', function(req, res) {
	Fruits
		.find({fruit: req.params.fruit})
		.exec(function(err, data) {
			console.log(err)
			console.log(data)
			res.json(data)
		})
})

router.get('/api/add', function(req, res) {

	var fruit = new Fruits({
    "fruit": "orange",
    "store": "Aldi",
    "location": "London",
    "price": 0.43,
    "imageURL": "https://dl.dropboxusercontent.com/u/43355605/4bMN4Grt2mPaGTBf.jpg",
    "reviews": [
        {
            "review": "Really nice, would buy again",
            "score": 5
        },
        {
            "review": "Awful, no thanks.",
            "score": 3
        },
        {
            "review": "Tasted more like a Pear. No thanks!",
            "score": 1
        }
    ]
})
	fruit.save(function(err, saved) {
						if (err) return next(err);
				console.log(saved)
				res.json(saved)
	})

})


module.exports = router;