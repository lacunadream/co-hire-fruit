const mongoose = require('mongoose');

let fruitSchema = new mongoose.Schema({
	name: String, 
	location: String, 
	price: String, 
	imageURL: String, 
	reviews: [{review: String, score: Number}]
})

module.exports = mongoose.model('Fruit', fruitSchema);