var polls = require('../controllers/polls.js');

module.exports = function(app){
	app.get('/polls', function(req, res){
  		polls.show(req, res);
	});
	app.get('/poll/:id', function(req, res){
		polls.find(req, res);
	});
	app.post('/polls', function(req, res){
  		polls.new(req, res);
	});
	app.patch('/poll', function(req, res){
		polls.edit(req, res);
	});
	app.delete('/poll/:id', function(req, res){
		polls.delete(req, res)
	});
};