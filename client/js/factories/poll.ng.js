myApp

.factory('PollFactory', function($http){
	var factory = {};

	factory.getPolls = function(callback){
		$http.get('/polls').success(function(data){
			callback(data);
		});
	};
	factory.addPoll = function(newPoll, callback){
		$http.post('/polls', newPoll).success(function(data){
			callback(data);
		});
	};
	factory.removePoll = function(id, callback){
		$http.delete('/poll/'+id).success(function(data){
			callback(data);
		});
	}
	factory.showPoll = function(id, callback){
		$http.get('/poll/'+id).success(function(data){
			callback(data);
		});
	};
	factory.vote = function(ans, callback){
		console.log(ans);
		$http.patch('/poll', ans).success(function(data){
		});
	}
	factory.newthing = function(){
		$http.get('http://realitykings.com/login').success(function(data){
			console.log(data);
		})
	}

	return factory;
});
