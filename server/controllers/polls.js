var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = {
	show: function(req, res){
		Poll.find({}, function(err, results){
			if(err){
				console.log(err);
			}
			else{
				res.json(results);
			}
		});
	},
	find: function(req, res){
		Poll.findOne({_id: req.params.id}, function(err, results){
			if(err){
				console.log(err);
			}
			else{
				res.json(results);
			}
		});
	},
	new: function(req, res){
		var poll = new Poll(req.body);
		poll.save(function(err){
			if(err){
				console.log('Error!');
			}
			else{
				console.log('Successfully added a poll!');
				res.json(poll);
			}
		});
	},
	delete: function(req, res){
		Poll.remove({_id: req.params.id}, function(err, ok){
			if(err){
				console.log('Error!');
			}
			else{
				res.json(ok);
			}
		});
	},
	edit: function(req, res){
		console.log('trying to edit.');
		console.log(req.body.id + ' ' + req.body.option);
		Poll.update({_id: req.body.id, "options.answer": req.body.option}, {"$inc": {"options.$.votes": 1}}, function(err, results){
			res.json(results);
		});
	}
};